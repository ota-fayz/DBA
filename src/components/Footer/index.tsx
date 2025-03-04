import { Row, Col } from 'antd'
import { SvgIcon } from '../../common/SvgIcon'
import Container from '../../common/Container'
import {
	FooterSection,
	Title,
	NavLink,
	Extra,
	LogoContainer,
	Para,
	Large,
	Chat,
	Empty,
	FooterContainer
} from './styles'

const CONTACTS = {
	addressLink: 'https://www.google.it/maps/place/9354+Bay+Colony+Dr,+Des+Plaines,+IL+60016,+%D0%A1%D0%A8%D0%90/@42.0482039,-87.8675998,17z/data=!3m1!4b1!4m6!3m5!1s0x880fb7effeca0f21:0x2a8b2857c48e5869!8m2!3d42.0482039!4d-87.8650249!16s%2Fg%2F11t7nq8460?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D'
}

const Footer = () => {
	return (
		<>
			<FooterSection>
				<Container>
					<Row justify="space-between">
						<Col lg={10} md={10} sm={12} xs={12}>
							<Title>Contact</Title>
							<Large to="/">Tell us everything</Large>
							<Para>
								Do you have any question? Feel free to reach out.
							</Para>
							<a href="mailto:dean@dandscargo.com">
								<Chat>Let's Chat</Chat>
							</a>
						</Col>
						<Col lg={8} md={8} sm={12} xs={12}>
							<Title>Phone</Title>
							<a href="tel:+3215662424">(321) 566-2424</a>
						</Col>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Title>USDOT Number</Title>
							<Large to="/">3482675</Large>
						</Col>
					</Row>
					<Row justify="space-between">
						<Col lg={10} md={10} sm={12} xs={12}>
							<Empty />
							<Title>Address</Title>
							<a target="_blank" rel="noreferrer" href={CONTACTS.addressLink}>9354 Bay Colony Dr Ste 1S Des Plaines, IL 60016</a>
						</Col>
						<Col lg={10} md={10} sm={12} xs={12}>
							<Empty />
							<Title>MC/MX/FF Number(s)</Title>
							<Large to="/">MC-1143567</Large>
						</Col>
					</Row>
				</Container>
			</FooterSection>
			<Extra>
				<Container border={true}>
					<Row
						justify="space-between"
						align="middle"
						style={{paddingTop: '3rem'}}
					>
						<NavLink to="/">
							<LogoContainer>
								<SvgIcon
									src="logo.svg"
									aria-label="homepage"
									width="74px"
									height="80px"
								/>
							</LogoContainer>
						</NavLink>
						<FooterContainer>
							Copyright ©{new Date().getFullYear()} All rights reserved |&nbsp;
							<a href="https://t.me/ota_fayz" target="_blank" rel="noreferrer">
								This website is made by Ota Fayz
							</a>
						</FooterContainer>
					</Row>
				</Container>
			</Extra>
		</>
	)
}

export default Footer
