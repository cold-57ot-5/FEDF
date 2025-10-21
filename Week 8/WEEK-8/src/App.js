import React, { useState, useRef, useEffect } from 'react';
import {
	Container,
	Paper,
	Box,
	MantineProvider,
	ColorSchemeProvider,
} from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

// Import components
import Header from './components/Header';
import TaskModal from './components/TaskModal';
import TaskList from './components/TaskList';
import AddTaskButton from './components/AddTaskButton';

export default function App() {
	const [tasks, setTasks] = useState([]);
	const [opened, setOpened] = useState(false);
	const [colorScheme, setColorScheme] = useState('light');
	
	// Load theme from localStorage on mount
	useEffect(() => {
		const savedTheme = localStorage.getItem('app-theme');
		if (savedTheme) {
			setColorScheme(savedTheme);
		}
	}, []);
	
	const toggleColorScheme = () => {
		const newScheme = colorScheme === 'dark' ? 'light' : 'dark';
		console.log('🎨 Switching theme to:', newScheme);
		setColorScheme(newScheme);
		localStorage.setItem('app-theme', newScheme);
	};

	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	const taskTitle = useRef('');
	const taskSummary = useRef('');
	const taskPriority = useRef('medium');

	function createTask() {
		setTasks([
			...tasks,
			{
				title: taskTitle.current.value,
				summary: taskSummary.current.value,
				priority: taskPriority.current,
				completed: false,
			},
		]);

		saveTasks([
			...tasks,
			{
				title: taskTitle.current.value,
				summary: taskSummary.current.value,
				priority: taskPriority.current,
				completed: false,
			},
		]);
	}

	function deleteTask(index) {
		var clonedTasks = [...tasks];

		clonedTasks.splice(index, 1);

		setTasks(clonedTasks);

		saveTasks([...clonedTasks]);
	}

	function loadTasks() {
		let loadedTasks = localStorage.getItem('tasks');

		let tasks = JSON.parse(loadedTasks);

		if (tasks) {
			setTasks(tasks);
		}
	}

	function saveTasks(tasks) {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	function toggleTaskCompletion(index) {
		const clonedTasks = [...tasks];
		clonedTasks[index].completed = !clonedTasks[index].completed;
		setTasks(clonedTasks);
		saveTasks(clonedTasks);
	}

	const getPriorityColor = (priority) => {
		switch (priority) {
			case 'high':
				return 'red';
			case 'medium':
				return 'yellow';
			case 'low':
				return 'green';
			default:
				return 'blue';
		}
	};

	useEffect(() => {
		loadTasks();
	}, []);

	const activeTasks = tasks.filter(t => !t.completed).length;

	const isDark = colorScheme === 'dark';

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}>
			<MantineProvider
				theme={{ 
					colorScheme: colorScheme, 
					defaultRadius: 'md',
					primaryColor: 'violet',
					fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, sans-serif',
				}}
				withGlobalStyles
				withNormalizeCSS>
				<Box
					sx={{
						minHeight: '100vh',
						background: isDark
							? 'linear-gradient(135deg, #1a1b26 0%, #2d1b4e 50%, #1a1b26 100%)'
							: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
						padding: '20px',
						transition: 'background 0.3s ease',
					}}>
					
					<TaskModal
						opened={opened}
						onClose={() => setOpened(false)}
						onCreate={createTask}
						taskTitle={taskTitle}
						taskSummary={taskSummary}
						taskPriority={taskPriority}
					/>
					
					<Container size={700} my={40}>
						<Paper
							shadow="xl"
							p="xl"
							radius="lg"
							sx={{
								background: isDark 
									? 'rgba(37, 38, 43, 0.95)' 
									: 'rgba(255, 255, 255, 0.95)',
								backdropFilter: 'blur(10px)',
								border: isDark 
									? '1px solid rgba(255, 255, 255, 0.1)' 
									: 'none',
								transition: 'all 0.3s ease',
							}}>
							
							<Header
								colorScheme={colorScheme}
								toggleColorScheme={toggleColorScheme}
								activeTasks={activeTasks}
							/>

							<TaskList
								tasks={tasks}
								onToggleTask={toggleTaskCompletion}
								onDeleteTask={deleteTask}
								getPriorityColor={getPriorityColor}
							/>

							<AddTaskButton onClick={() => setOpened(true)} />
						</Paper>
					</Container>
				</Box>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
