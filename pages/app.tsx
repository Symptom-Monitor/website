import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import P from '../components/p';

const AppPage = () => (
	<Grid container justify="space-around">
		<Grid item>
			<Typography gutterBottom variant="h3">Research</Typography>

			<P>
				We plan to divide the entire project into 2 phases. In Phase I, we will focus on prototyping the symptom monitoring via mobile sensing, including Blood-Oxygen Saturation (SpO2) and Heart Rate (HR) by mobile camera, and cough detection by mobile accelerometer. We will further add these high-resolution data into our pandemic model. Each of them will be one task.  In Phase II, we will integrate the mobile sensing and computing towards the app design. Even after the pandemic outbreak, the proposed symptom monitoring app can be adjusted for monitoring different symptoms for various of epidemic diseases.
			</P>

			<P>
				The goal of this project is to develop early symptom monitoring solutions of COVID-19 via mobile computing for enhancing self-diagnosis in quarantine for both individual decision making and further increasing the spatiotemporal resolution of established pandemic outbreak model. We provide a free app named VirusTrack for symptom monitoring and tracking as well as risk estimation at home. The app itself can monitor major symptoms suggested by CDC including blood oxygen saturation, heart rate, cough, etc. and provide support for self-estimation. Our proposed app is free of charge and easy to use for everyone. The app can also estimate the risk in different areas with more timely data and accurate spatial resolution.
				{}
				<img src={require('../public/images/app.png')} style={{width: '100%', marginTop: '1rem'}}/>
			</P>
		</Grid>
	</Grid>
);

export default AppPage;
