import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useAPI} from '../lib/api';
import styles from './styles/map.module.scss';

interface IMarker {
	x: number;
	y: number;
}

const Map = () => {
	const api = useAPI();

	const [markerPosition, setMarkerPosition] = useState<IMarker>({
		x: 0.609,
		y: 0.164
	});

	const [alpha, setAlpha] = useState(0.1);
	const [beta, setBeta] = useState(0.01);
	const [gamma, setGamma] = useState(0.5);

	const [loading, setLoading] = useState(false);
	const [videoResultURL, setVideoResultURL] = useState<string | null>(null);

	const handleMapClick = (event: React.MouseEvent) => {
		const currentTargetRect = event.currentTarget.getBoundingClientRect();
		const x = event.pageX - currentTargetRect.left;
		const y = event.pageY - currentTargetRect.top;

		const percentX = x / currentTargetRect.width;
		const percentY = y / currentTargetRect.height;

		setMarkerPosition({x: percentX, y: percentY});
	};

	const handleSubmit = async () => {
		setLoading(true);
		const blob = await api.getSimulatedSpread({...markerPosition, alpha, beta, gamma});
		setLoading(false);

		setVideoResultURL(URL.createObjectURL(blob));
	};

	return (
		<Grid container style={{flexGrow: 1, textAlign: 'center'}} alignItems="center" spacing={4}>
			<Grid item xs={12}>
				<Typography variant="h3">Simulate Spread</Typography>
			</Grid>

			<Grid item container xs={12} justify="center" alignItems="center" spacing={2}>
				<Grid item>
					<FormGroup>
						<FormControl>
							<InputLabel htmlFor="alpha-input">Α</InputLabel>
							<Input id="alpha-input" aria-describedby="alpha-text" type="number" value={alpha} onChange={event => setAlpha(Number.parseFloat(event.target.value))}/>
							<FormHelperText id="alpha-text">Alpha parameter</FormHelperText>
						</FormControl>

						<FormControl>
							<InputLabel htmlFor="beta-input">β</InputLabel>
							<Input id="beta-input" aria-describedby="beta-text" type="number" value={beta} onChange={event => setBeta(Number.parseFloat(event.target.value))}/>
							<FormHelperText id="beta-text">Beta parameter</FormHelperText>
						</FormControl>

						<FormControl>
							<InputLabel htmlFor="gamma-input">𝚪</InputLabel>
							<Input id="gamma-input" aria-describedby="gamma-text" type="number" value={gamma} onChange={event => setGamma(Number.parseFloat(event.target.value))}/>
							<FormHelperText id="gamma-text">Gamma parameter</FormHelperText>
						</FormControl>

						<Button variant="contained" color="primary" style={{marginTop: '1rem'}} disabled={loading} onClick={handleSubmit}>Simulate</Button>
					</FormGroup>
				</Grid>

				<Grid item>
					<div className={styles.mapContainer}>
						<img src={`${process.env.NEXT_PUBLIC_ENDPOINT as string}/static/population-density.png`} id="map-input" onClick={handleMapClick}/>

						<div className={styles.marker} style={{left: `${markerPosition.x * 100}%`, top: `${markerPosition.y * 100}%`}}/>

						{loading && (
							<div className={styles.loaderOverlay}>
								<CircularProgress/>
							</div>
						)}
					</div>
				</Grid>

				<Grid item xs={12}>
					{
						videoResultURL && (
							<video muted loop autoPlay className="MuiPaper-elevation5 MuiPaper-rounded" src={videoResultURL}/>
						)
					}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Map;
