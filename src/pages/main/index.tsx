import Layout from '@components/layouts/layout'
import Intro from "@pages/main/intro";

const Main = () => {

	return (
		<Layout main={true}>
			<section className="intro2">
				<Intro />
			</section>
		</Layout>
	)
}

export default Main
