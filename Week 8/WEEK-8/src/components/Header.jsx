import React from 'react';
import { Group, Title, Text, ActionIcon, Box } from '@mantine/core';
import { MoonStars, Sun } from 'tabler-icons-react';

const Header = ({ colorScheme, toggleColorScheme, activeTasks }) => {
	const isDark = colorScheme === 'dark';
	
	return (
		<Group position={'apart'} mb="xl">
			<Box>
				<Title
					order={1}
					sx={{
						fontFamily: 'Greycliff CF, sans-serif',
						fontWeight: 900,
						fontSize: '2.5rem',
						background: isDark
							? 'linear-gradient(45deg, #a78bfa 0%, #c084fc 100%)'
							: 'linear-gradient(45deg, #667eea 0%, #bd2c66ff 100%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						marginBottom: '5px',
						transition: 'background 0.3s ease',
					}}>
					📝 My Tasks
				</Title>
				<Text color="dimmed" size="sm">
					{activeTasks} active tasks
				</Text>
			</Box>
			<ActionIcon
				color={'violet'}
				onClick={toggleColorScheme}
				size='xl'
				radius="xl"
				variant="gradient"
				gradient={{ from: 'violet', to: 'grape', deg: 45 }}
				sx={{
					transition: 'all 0.3s ease',
					'&:hover': {
						transform: 'rotate(180deg)',
					}
				}}>
				{isDark ? (
					<Sun size={20} />
				) : (
					<MoonStars size={20} />
				)}
			</ActionIcon>
		</Group>
	);
};

export default Header;
