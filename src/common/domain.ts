/**
 * <PRE>
 * 1. Name : PATH
 * 2. Comment   : 도메인 주소 ENUM 관리
 * 3. Author    : JSH
 * <PRE>
 */
export const enum PATH {
	//메인
	// MAIN = '/main',
	MAIN = '/',

	LOGIN = '/login',
	ERROR = '/*',

	//메뉴
	MENU0SUB0 = '/company',
	MENU0SUB1 = '/company/organization',
	MENU0SUB2 = '/company/certificate',
	MENU0SUB3 = '/company/patent',
	MENU0SUB4 = '/company/location',

	MENU1SUB0 = '/business',
	MENU1SUB1 = '/business/history',

	MENU2SUB0 = '/research',
	MENU2SUB1 = '/research/history',

	MENU3SUB0 = '/prcenter',
	MENU3SUB1 = '/prcenter/faq',
	MENU3SUB2 = '/prcenter/pr',

	MENU4SUB0 = '/recruit',
	MENU4SUB1 = '/recruit/ment',
	MENU4SUB2 = '/recruit/detail/:menu/:index',

	MENU5SUB0 = '/customer',

	STATISTIC = '/statistic'
}

/* ******************* 메뉴 리스트 ******************* */
//메뉴
export const enum MENU {
	MENU0, //첫번째메뉴
	MENU1, //두번째메뉴
	MENU2, //세번째메뉴
	MENU3, //네번째메뉴
	MENU4, //다섯번째메뉴
	MENU5, //여섯번째메뉴
	MENU6, //일곱번째메뉴
	BLANK //여덟번째메뉴
}

//회사소개
export const enum MENU0 {
	SUB0, //첫번째서브메뉴
	SUB1, //두번째서브메뉴
	SUB2, //세번째서브메뉴
	SUB3, //네번째서브메뉴
	SUB4 //다섯번째서브메뉴
}
export const enum MENU1 {
	SUB0, //첫번째서브메뉴
	SUB1 //두번째서브메뉴
}
export const enum MENU2 {
	SUB0, //첫번째서브메뉴
	SUB1, //두번째서브메뉴
	SUB2 //세번째서브메뉴
}
export const enum MENU3 {
	SUB0, //첫번째서브메뉴
	SUB1, //두번째서브메뉴
	SUB2 //세번째서브메뉴
}
export const enum MENU4 {
	SUB0, //첫번째서브메뉴
	SUB1 //두번째서브메뉴
}
export const enum MENU5 {
	SUB0, //첫번째서브메뉴
	SUB1 //두번째서브메뉴
}
export const enum MENU_NAME {}
