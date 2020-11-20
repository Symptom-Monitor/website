import React from 'react';
import Typography from '@material-ui/core/Typography';

const P = ({children}: {children: React.ReactNode}) => (
	<Typography gutterBottom variant="body1" style={{maxWidth: '60ch'}}>
		{children}
	</Typography>
);

export default P;
