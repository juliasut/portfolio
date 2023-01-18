import React from 'react';
import IconLink from './IconLink';
import { Box, Typography, Container } from '@mui/material';

function PortfolioBlock(props) {
  // eslint-disable-next-line no-unused-vars
  const { image, live, source, title, description } = props;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={6}
    >
      <Typography
        component="h2"
        align="center"
        sx={{ fontSize: '2rem', fontWeight: 'bold' }}
        gutterBottom
      >
        {title}
      </Typography>
      <Box
        component={'img'}
        src={image}
        alt={'mockup'}
        sx={{
          borderRadius: '1rem',
          filter: 'drop-shadow(0.5rem 0.5rem 0.8rem rgba(0,0,0,0.4))',
          marginBottom: '1.5rem',
        }}
      />

      <Typography variant="body1" align="center">
        {description}
      </Typography>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.2rem'}
        py={'1rem'}
      >
        {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
        </Box> */}
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
