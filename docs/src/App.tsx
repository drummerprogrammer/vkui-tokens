import '@vkontakte/vkui/dist/fonts.css';
import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/vkui/dist/unstable.css';
import './styles/index.css';

import React, {FC} from 'react';

import Main from '@/components/layouts/Main';
import Tokens from '@/pages/Tokens';

const App: FC = () => (
	<Main>
		<Tokens />
	</Main>
);

export default App;
