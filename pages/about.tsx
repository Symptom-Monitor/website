import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import P from '../components/p';

const AboutPage = () => (
	<Grid container justify="space-around">
		<Grid item>
			<Typography gutterBottom variant="h3">Vision and Goal</Typography>

			<P>
				Among confirmed COVID-19 cases, it has been widely observed that pneumonia normally already occurs before patients can self-diagnose it, which may cause sudden worsening. According to the Centers for Disease Control and Prevention (CDC), fever, cough, and shortness of breath are the three main early symptoms of COVID-19. From the technology perspective, it is feasible to self-detect and self-track these early symptoms, especially low blood-oxygen saturation at home using only cellphones for individuals to make decisions before things become irreparably severe. In addition, medical resources will become another issue especially for remote areas such as Upper Michigan where MTU is located. There is a tradeoff between sending to the hospital and staying self-quarantined.
			</P>

			<P>
				The goal of this project is to develop early symptom monitoring solutions of COVID-19 via mobile computing for enhancing self-diagnosis in quarantine for both individual decision making and further increasing the spatiotemporal resolution of established pandemic outbreak model. We provide a free app named VirusTrack for symptom monitoring and tracking as well as risk estimation at home. The app itself can monitor major symptoms suggested by CDC including blood oxygen saturation, heart rate, cough, etc. and provide support for self-estimation. Our proposed app is free of charge and easy to use for everyone. The app can also estimate the risk in different areas with more timely data and accurate spatial resolution.
			</P>
		</Grid>
	</Grid>
);

export default AboutPage;
