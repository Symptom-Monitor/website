import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const VideoPage = () => {
	const [file, setFile] = useState<File | null>(null);

	const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFile((event.target.files ?? [null])[0]);
	};

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
						<Button color="primary" variant="contained" component="span">Select a file</Button>
					</label>
				</Grid>
			</Grid>

			{
				file && (
					<>
						<Grid item xs={12}>
							<video autoPlay muted controls loop className="MuiPaper-elevation5 MuiPaper-rounded" src={URL.createObjectURL(file)} style={{maxWidth: '80vw', maxHeight: '50vh'}}/>
						</Grid>

						<Grid item container xs={12} justify="center" alignItems="center" spacing={2}>
							<Grid item>
								<Typography variant="body1" component="span">What algorithm do you want to run?</Typography>
							</Grid>

							<Grid item>
								<FormControl>
									<Select native>
										<option value={0}>People detection</option>
										<option value={1}>Blood oxygen level</option>
									</Select>
								</FormControl>
							</Grid>

							<Grid item>
								<Button variant="contained" color="primary">Process</Button>
							</Grid>
						</Grid>
					</>
				)
			}
		</Grid>
	);
};

export default VideoPage;
