import React from 'react';
import {
	Card,
	Group,
	Text,
	Badge,
	ActionIcon,
	Checkbox,
	Box,
} from '@mantine/core';
import { Trash, Check } from 'tabler-icons-react';

const TaskCard = ({ task, index, onToggle, onDelete, getPriorityColor }) => {
	if (!task.title) return null;

	return (
		<Card 
			withBorder 
			radius="md"
			p="lg"
			sx={(theme) => ({
				transition: 'all 0.3s ease',
				border: `2px solid ${task.completed ? theme.colors.green[4] : theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : theme.colors.gray[3]}`,
				opacity: task.completed ? 0.7 : 1,
				backgroundColor: theme.colorScheme === 'dark' ? 'rgba(45, 46, 51, 0.6)' : theme.white,
				'&:hover': {
					transform: 'translateY(-2px)',
					boxShadow: theme.shadows.lg,
					borderColor: theme.colors.violet[4],
					backgroundColor: theme.colorScheme === 'dark' ? 'rgba(55, 56, 61, 0.8)' : theme.white,
				}
			})}>
			<Group position={'apart'} noWrap>
				<Group spacing="md" sx={{ flex: 1 }}>
					<Checkbox
						checked={task.completed}
						onChange={() => onToggle(index)}
						size="md"
						radius="xl"
						color="green"
					/>
					<Box sx={{ flex: 1 }}>
						<Group spacing="xs" mb={5}>
							<Text 
								weight={600} 
								size="lg"
								sx={{
									textDecoration: task.completed ? 'line-through' : 'none',
								}}>
								{task.title}
							</Text>
							<Badge 
								color={getPriorityColor(task.priority)}
								variant="filled"
								size="sm"
								radius="sm">
								{task.priority || 'medium'}
							</Badge>
							{task.completed && (
								<Badge 
									color="green"
									variant="outline"
									size="sm"
									leftIcon={<Check size={12} />}>
									Completed
								</Badge>
							)}
						</Group>
						<Text 
							color={'dimmed'} 
							size={'sm'}
							sx={{
								textDecoration: task.completed ? 'line-through' : 'none',
							}}>
							{task.summary || 'No description provided'}
						</Text>
					</Box>
				</Group>
				<ActionIcon
					onClick={() => onDelete(index)}
					color={'red'}
					variant={'light'}
					size="lg"
					radius="md"
					sx={{
						'&:hover': {
							transform: 'scale(1.1)',
							transition: 'transform 0.2s ease',
						}
					}}>
					<Trash size={18} />
				</ActionIcon>
			</Group>
		</Card>
	);
};

export default TaskCard;
