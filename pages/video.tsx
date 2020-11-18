import React, {useCallback, useState, useMemo} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IAPIResponse {
	good?: boolean;
	str: string;
}

const VideoPage = () => {
	const [loading, setLoading] = useState(false);
	const [file, setFile] = useState<File | null>(null);
	const [apiResponse, setApiResponse] = useState<IAPIResponse | null>(null);

	const videoURL = useMemo(() => file ? URL.createObjectURL(file) : '', [file]);

	const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFile((event.target.files ?? [null])[0]);
		setApiResponse(null);
	};

	const handleProcess = useCallback(() => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			setApiResponse({
				str: '5 people were detected',
				good: true
			});
		}, 2000);
	}, []);

	return (
		<Grid container style={{flexGrow: 1, textAlign: 'center'}} alignItems="center" spacing={4}>
			<Grid item xs={12}>
				<Typography variant="h3">Process a video</Typography>
			</Grid>

			<Grid item container xs={12} justify="center" alignItems="center" spacing={2}>
				<Grid item>
					<Typography variant="body1" component="span">Select a video to process:</Typography>
				</Grid>

				<Grid item>
					<input
						accept="video/*"
						id="video-button"
						type="file"
						style={{display: 'none'}}
						onChange={handleFileInputChange}
					/>
					<label htmlFor="video-button">
						<Button color="primary" variant="contained" component="span" disabled={loading}>Select a file</Button>
					</label>
				</Grid>
			</Grid>

			{file && (
				<>
					<Grid item xs={12}>
						<video autoPlay muted controls loop className="MuiPaper-elevation5 MuiPaper-rounded" src={videoURL} style={{maxWidth: '80vw', maxHeight: '50vh'}}/>
					</Grid>

					<Grid item container xs={12} justify="center" alignItems="center" spacing={2}>
						<Grid item>
							<Typography variant="body1" component="span">What algorithm do you want to run?</Typography>
						</Grid>

						<Grid item>
							<FormControl>
								<Select native disabled={loading}>
									<option value={0}>People detection</option>
									<option value={1}>Blood oxygen level</option>
								</Select>
							</FormControl>
						</Grid>

						<Grid item>
							<Button variant="contained" color="primary" disabled={loading} startIcon={loading ? <CircularProgress size="0.875rem"/> : null} onClick={handleProcess}>Process</Button>
						</Grid>
					</Grid>
				</>
			)}

			{
				apiResponse && (
					<Grid item container className="MuiPaper-elevation3 MuiPaper-rounded" justify="center" alignItems="center" spacing={2} style={{width: 'auto', marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem'}}>
						{
							apiResponse.good !== undefined && (
								apiResponse.good ? (
									<CheckCircleIcon color="primary" style={{marginRight: '0.5rem'}}/>
								) : (
									<CancelIcon color="secondary" style={{marginRight: '0.5rem'}}/>
								)
							)
						}
						<Typography variant="h5" component="span">{apiResponse.str}</Typography>
					</Grid>
				)
			}
		</Grid>
	);
};

export default VideoPage;
