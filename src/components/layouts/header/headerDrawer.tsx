import * as React from 'react'
import { Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import BusinessIcon from '@mui/icons-material/Business'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import SummarizeIcon from '@mui/icons-material/Summarize'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import EditRoadIcon from '@mui/icons-material/EditRoad'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf'
import BiotechIcon from '@mui/icons-material/Biotech'
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import BadgeIcon from '@mui/icons-material/Badge'
import HelpIcon from '@mui/icons-material/Help'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { PATH } from '@common/domain'

const HeaderDrawer = ({ toggleDrawer }: any) => {
	const [intro, setIntro] = React.useState(false)
	const [business, setBusiness] = React.useState(false)
	const [research, setResearch] = React.useState(false)
	const [pr, setPr] = React.useState(false)
	const [employ, setEmploy] = React.useState(false)
	const [help, setHelp] = React.useState(false)
	const MENU0Link = [PATH.MENU0SUB0, PATH.MENU0SUB1, PATH.MENU0SUB2, PATH.MENU0SUB3, PATH.MENU0SUB4]
	const MENU1Link = [PATH.MENU1SUB0, PATH.MENU1SUB1]
	const MENU2Link = [PATH.MENU2SUB0, PATH.MENU2SUB1]
	const MENU3Link = [PATH.MENU3SUB0, PATH.MENU3SUB1, PATH.MENU3SUB2]
	const MENU4Link = [PATH.MENU4SUB0, PATH.MENU4SUB1, PATH.MENU4SUB2]
	const MENU5Link = [PATH.MENU5SUB0]
	return (
		<Box sx={{ width: 200 }} role="presentation" onKeyDown={toggleDrawer(false)}>
			<List
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Menu
					</ListSubheader>
				}
			>
				<Divider />
				<ListItemButton onClick={() => setIntro(!intro)}>
					<ListItemIcon>
						<BusinessIcon />
					</ListItemIcon>
					<ListItemText primary="메뉴1" />
					{intro ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={intro} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['서브메뉴1', '서브메뉴2', '서브메뉴3', '서브메뉴4', '서브메뉴5'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={MENU0Link[index]}>
									<ListItemIcon>
										{index === 0 ? (
											<RecordVoiceOverIcon />
										) : index === 1 ? (
											<PeopleAltIcon />
										) : index === 2 ? (
											<SummarizeIcon />
										) : index === 3 ? (
											<EmojiEventsIcon />
										) : (
											<EditRoadIcon />
										)}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
						<Divider />
					</List>
				</Collapse>
				<ListItemButton onClick={() => setBusiness(!business)}>
					<ListItemIcon>
						<EnergySavingsLeafIcon />
					</ListItemIcon>
					<ListItemText primary="메뉴2" />
					{business ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={business} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['서브메뉴1', '서브메뉴2'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={MENU1Link[index]}>
									<ListItemIcon>{index === 0 ? <BiotechIcon /> : index === 1 ? <EmojiEventsIcon /> : <SummarizeIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Collapse>
				<ListItemButton onClick={() => setResearch(!research)}>
					<ListItemIcon>
						<EnergySavingsLeafIcon />
					</ListItemIcon>
					<ListItemText primary="메뉴3" />
					{research ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={research} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['서브메뉴1', '서브메뉴2'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={MENU2Link[index]}>
									<ListItemIcon>{index === 0 ? <BiotechIcon /> : index === 1 ? <EmojiEventsIcon /> : <SummarizeIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Collapse>
				<Divider />
				<ListItemButton onClick={() => setPr(!pr)}>
					<ListItemIcon>
						<InterpreterModeIcon />
					</ListItemIcon>
					<ListItemText primary="메뉴4" />
					{pr ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={pr} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['서브메뉴1', '서브메뉴2', '서브메뉴3'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={MENU3Link[index]}>
									<ListItemIcon>
										{index === 0 ? <NewspaperIcon /> : index === 1 ? <QuestionAnswerIcon /> : <SummarizeIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
						<Divider />
					</List>
				</Collapse>
				<ListItemButton onClick={() => setEmploy(!employ)}>
					<ListItemIcon>
						<GroupAddIcon />
					</ListItemIcon>
					<ListItemText primary="메뉴5" />
					{employ ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={employ} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['서브메뉴1', '서브메뉴2', '서브메뉴3'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={MENU4Link[index]}>
									<ListItemIcon>{index % 2 === 0 ? <BadgeIcon /> : <SummarizeIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
						<Divider />
					</List>
				</Collapse>
				<ListItemButton onClick={() => setHelp(!help)}>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText primary="메뉴6" />
					{help ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={help} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['서브메뉴1'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={MENU5Link[index]}>
									<ListItemIcon>{index % 2 === 0 ? <HeadphonesIcon /> : <SummarizeIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
						<Divider />
					</List>
				</Collapse>
			</List>
		</Box>
	)
}
export default HeaderDrawer
