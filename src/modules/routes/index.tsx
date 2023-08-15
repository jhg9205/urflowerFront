import { Routes, Route, Outlet } from 'react-router-dom'

import '@css/contents.css'
import '@css/common.css'
import '@css/common.scss'
import '@css/main.scss'
import '@css/menu.scss'

import { PATH } from '@common/domain'
import Main from '@pages/main'
import Error from '@pages/error'

const Router = () => {
	return (
		<>
			<Routes>
				<Route path={PATH.MAIN} element={<Main />} />
				<Route path={PATH.ERROR} element={<Error />} />
			</Routes>
		</>
	)
}

export default Router
