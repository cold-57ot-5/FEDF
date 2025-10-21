import React from 'react';
import { Paper, Text } from '@mantine/core';

const EmptyState = () => {
	return (
		<Paper 
			p="xl" 
			radius="md" 
			sx={(theme) => ({
				textAlign: 'center',
				border: `2px dashed ${theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : theme.colors.gray[4]}`,
				backgroundColor: theme.colorScheme === 'dark' ? 'rgba(45, 46, 51, 0.4)' : 'transparent',
			})}>
			<Text size={'xl'} color={'dimmed'} weight={500}>
				🎯 No tasks yet
			</Text>
			<Text size={'sm'} color={'dimmed'} mt={5}>
				Click the button below to create your first task!
			</Text>
		</Paper>
	);
};

export default EmptyState;
