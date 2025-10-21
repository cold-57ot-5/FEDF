import React from 'react';
import {
	Modal,
	TextInput,
	Select,
	Group,
	Button,
	Stack,
	Text,
	useMantineTheme,
} from '@mantine/core';
import { Pencil, Plus } from 'tabler-icons-react';

const TaskModal = ({ opened, onClose, onCreate, taskTitle, taskSummary, taskPriority }) => {
	const theme = useMantineTheme();

	const handleCreate = () => {
		onCreate();
		onClose();
	};

	return (
		<Modal
			opened={opened}
			size={'md'}
			title={
				<Text size="xl" weight={700} color="violet">
					✨ Create New Task
				</Text>
			}
			withCloseButton={false}
			onClose={onClose}
			centered
			overlayOpacity={0.55}
			overlayBlur={3}
			radius="lg"
			shadow="xl">
			<Stack spacing="md">
				<TextInput
					ref={taskTitle}
					placeholder={'Enter task title...'}
					required
					label={'Task Title'}
					size="md"
					icon={<Pencil size={16} />}
					styles={{
						input: {
							'&:focus': {
								borderColor: theme.colors.violet[6],
							}
						}
					}}
				/>
				<TextInput
					ref={taskSummary}
					placeholder={'What needs to be done?'}
					label={'Description'}
					size="md"
					styles={{
						input: {
							'&:focus': {
								borderColor: theme.colors.violet[6],
							}
						}
					}}
				/>
				<Select
					label="Priority Level"
					placeholder="Select priority"
					defaultValue="medium"
					size="md"
					onChange={(value) => { taskPriority.current = value; }}
					data={[
						{ value: 'low', label: '🟢 Low Priority' },
						{ value: 'medium', label: '🟡 Medium Priority' },
						{ value: 'high', label: '🔴 High Priority' },
					]}
					styles={{
						input: {
							'&:focus': {
								borderColor: theme.colors.violet[6],
							}
						}
					}}
				/>
				<Group mt={'md'} position={'apart'}>
					<Button
						onClick={onClose}
						variant={'subtle'}
						color="gray"
						size="md">
						Cancel
					</Button>
					<Button
						onClick={handleCreate}
						variant="gradient"
						gradient={{ from: 'violet', to: 'grape', deg: 45 }}
						size="md"
						leftIcon={<Plus size={18} />}>
						Create Task
					</Button>
				</Group>
			</Stack>
		</Modal>
	);
};

export default TaskModal;
