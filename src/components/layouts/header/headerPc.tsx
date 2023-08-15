import * as React from 'react'
import { useEffect } from 'react'
import { PATH } from '@common/domain'
import useClasses from '@utils/useClasses'
import logoWhite from '@images/common/debrixBlue.png'
import { Box } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'

let currentPath = ''

const HeaderPc = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const menuPath: string[] = [PATH.MENU0SUB0, PATH.MENU1SUB0, PATH.MENU2SUB0, PATH.MENU3SUB0, PATH.MENU4SUB0, PATH.MENU5SUB0]

	useEffect(() => {
		if (currentPath === location.pathname) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}

		currentPath = location.pathname
	}, [location])

	const defaultTab = {
		fontSize: '1.5rem',
		outline: 'none',
		fontFamily: 'Noto Sans KR',
		width: '100%',
		fontWeight: '800px'
	}
	const handleClick = (params: string) => {
		navigate(params)
	}
	const useStyles = (theme: any) => ({
		customStyleOnTab: Object.assign({ color: '#fff' }, defaultTab),
		customStyleOnTab2: Object.assign({ color: 'rgb(255,255,255)' }, defaultTab),
		activeTab: Object.assign({ color: '#5094e9', fontWeight: 'bold', border: 0, right: 0 }, defaultTab),
		subActiveTab: Object.assign({ color: '#5094e9', fontWeight: 'bold', border: 0, right: 0 }, defaultTab),
		sX: {
			width: '100%',
			margin: '0 0 40',
			borderBottom: 1,
			borderColor: '#d5d5d5'
		},
		sp: {
			width: '100%',
			flexGrow: '1!important',
			webkitBoxFlex: '1!important',
			msFlexPositive: '1!important'
		},
		img: {
			width: '190px'
		},
		spacer: {
			width: '100%'
		},
		hidden: {
			display: 'none'
		}
	})

	const classes = useClasses(useStyles)

	const Menu = (props: { title: string; menu: string }) => {
		return (
			<li
				onClick={() => {
					handleClick(props.menu)
				}}
			>
				<p>{props.title}</p>
			</li>
		)
	}

	return (
		<header>
			{/* 메인메뉴 */}
			<div id="headerTopWrap" className="top header2" style={{ backgroundColor: 'rgba(255,255,255,0)' }}>
				<Link to="/">
					<img style={classes.img} src={logoWhite} alt="로고" />
				</Link>
				<Box sx={classes.activeTab}>
					<ul className="menu">
						<li>
							<Link to={menuPath[0]}>메뉴1</Link>
							<ul className="submenu submenu1">
								<div></div>
								<Menu title="서브메뉴1" menu={PATH.MENU0SUB0} />
								<Menu title="서브메뉴2" menu={PATH.MENU0SUB1} />
								<Menu title="서브메뉴3" menu={PATH.MENU0SUB2} />
								<Menu title="서브메뉴4" menu={PATH.MENU0SUB3} />
								<Menu title="서브메뉴5" menu={PATH.MENU0SUB4} />
							</ul>
						</li>
						<li>
							<Link to={menuPath[1]}>메뉴2</Link>
							<ul className="submenu submenu2">
								<div></div>
								<Menu title="서브메뉴1" menu={PATH.MENU1SUB0} />
								<Menu title="서브메뉴2" menu={PATH.MENU1SUB1} />
							</ul>
						</li>
						<li>
							<Link to={menuPath[2]}>메뉴3</Link>
							<ul className="submenu submenu3">
								<div></div>
								<Menu title="서브메뉴1" menu={PATH.MENU2SUB0} />
								<Menu title="서브메뉴2" menu={PATH.MENU2SUB1} />
							</ul>
						</li>
						<li>
							<Link to={menuPath[3]}>메뉴4</Link>
							<ul className="submenu submenu4">
								<div></div>
								<Menu title="서브메뉴1" menu={PATH.MENU3SUB0} />
								<Menu title="서브메뉴2" menu={PATH.MENU3SUB1} />
								<Menu title="서브메뉴3" menu={PATH.MENU3SUB2} />
							</ul>
						</li>
						<li>
							<Link to={menuPath[4]}>메뉴5</Link>
							<ul className="submenu submenu5">
								<div></div>
								<Menu title="서브메뉴1" menu={PATH.MENU4SUB0} />
								<Menu title="서브메뉴2" menu={PATH.MENU4SUB1} />
								<Menu title="서브메뉴3" menu={PATH.MENU4SUB2} />
							</ul>
						</li>
						<li>
							<Link to={menuPath[5]}>메뉴6</Link>
							<ul className="submenu submenu6">
								<div></div>
								<Menu title="서브메뉴1" menu={PATH.MENU5SUB0} />
							</ul>
						</li>
					</ul>
				</Box>
			</div>
		</header>
	)
}
export default HeaderPc
