import React from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import { Plus } from 'tabler-icons-react';

const AddTaskButton = ({ onClick }) => {
	const theme = useMantineTheme();

	return (
		<Button
			onClick={onClick}
			fullWidth
			mt={'xl'}
			size="lg"
			radius="md"
			variant="gradient"
			gradient={{ from: 'violet', to: 'grape', deg: 45 }}
			leftIcon={<Plus size={20} />}
			sx={{
				'&:hover': {
					transform: 'translateY(-2px)',
					boxShadow: theme.shadows.md,
					transition: 'all 0.2s ease',
				}
			}}>
			Add New Task
		</Button>
	);
};

export default AddTaskButton;
