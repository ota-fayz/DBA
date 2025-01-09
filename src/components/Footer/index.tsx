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
	addressLink: 'https://www.google.it/maps/place/721+Seymour+St,+Monroe,+NC+28110,+USA/@34.397756,-81.4498253,5.61z/data=!4m6!3m5!1s0x885430c18d54f7dd:0x4aeccb9a35ce0468!8m2!3d34.9962412!4d-80.5646686!16s%2Fg%2F11c2djfcc9?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D'
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
							<a target="_blank" href={CONTACTS.addressLink}>721 SEYMOUR ST MONROE, NC 28110</a>
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
									width="101px"
									height="64px"
								/>
							</LogoContainer>
						</NavLink>
						<FooterContainer>
							Copyright ©{new Date().getFullYear()} All rights reserved | This website is made by&nbsp;
							<a
								href="https://t.me/ota_fayz"
								target="_blank"
								rel="noopener"
							>
								Ota Fayz
							</a>
						</FooterContainer>
					</Row>
				</Container>
			</Extra>
		</>
	)
}

export default Footer
