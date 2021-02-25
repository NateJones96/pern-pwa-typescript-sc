import styled from 'styled-components';
import { Box } from 'rebass';
import { Label, Checkbox } from '@rebass/forms';
import './App.css';

// styled

function App() {
	return (
		<Box>
            <Label>
                <Checkbox
                    checked
                />
                PERN stack
            </Label>
            <Label>
                <Checkbox
                    checked
                />
                Progressive Web App
            </Label>
            <Label>
                <Checkbox
                    checked
                />
                Typescript
            </Label>
            <Label>
                <Checkbox
                    checked
                />
                Styled Components
            </Label>
            <Label>
                <Checkbox
                    checked
                />
                React Router
            </Label>
            <Label>
                <Checkbox
                    checked
                />
                React Redux
            </Label>
            <Label>
                <Checkbox
                    checked
                />
                Heroku Integration
            </Label>
		</Box>
	);
}

export default App;
