import React from 'react';
import { Stack } from '@mantine/core';
import TaskCard from './TaskCard';
import EmptyState from './EmptyState';

const TaskList = ({ tasks, onToggleTask, onDeleteTask, getPriorityColor }) => {
	if (tasks.length === 0) {
		return <EmptyState />;
	}

	return (
		<Stack spacing="md">
			{tasks.map((task, index) => (
				<TaskCard
					key={index}
					task={task}
					index={index}
					onToggle={onToggleTask}
					onDelete={onDeleteTask}
					getPriorityColor={getPriorityColor}
				/>
			))}
		</Stack>
	);
};

export default TaskList;
