import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { fnCurrency } from '../../utils/format-number';

import { Label } from '../label';
// import Label from '@mui/material/InputLabel';
import { ColorPreview } from '../color-utils';

// ----------------------------------------------------------------------

export type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  status: string;
  coverUrl: string;
  colors: string[];
  priceSale: number | null;
};

export function ProductItem({ product }: { product: ProductItemProps }) {
  // Check if this is the HugVoice product
  const isHugVoice = product.name === 'Dasion Hugvoice';
  
  // Check if this is the Dasion Guider product
  const isDasionGuider = product.name === 'Dasion Guider';
  
  // Check if this is the AutismCare product
  const isAutismCare = product.name === 'AutismCare';

  if (isHugVoice) {
    return (
      <Card sx={{ borderRadius: '1.2em', cursor: 'pointer' }}>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          <Box
            component="img"
            alt="HugVoice - Voice AI for Kid Depression Care"
            src="/assets/images/cover/cover-1.webp"
            sx={{
              top: 0,
              width: 1,
              height: 1,
              objectFit: 'cover',
              position: 'absolute',
            }}
          />
          <Label
            variant="outlined"
            color="info"
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            NEW
          </Label>
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            HugVoice™
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Voice AI for Kid Depression Care
          </Typography>
          <Typography variant="body2" paragraph>
            An AI-powered mental health platform designed to gently support children experiencing depression through voice-based emotional analysis.
          </Typography>
          
          <Button
            variant="contained"
            color="primary"
            href="https://hugvoice.dasionai.com/"
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{ mt: 1 }}
          >
            Learn More
          </Button>
        </Stack>
      </Card>
    );
  }

  if (isDasionGuider) {
    return (
      <Card sx={{ borderRadius: '1.2em', cursor: 'pointer' }}>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          <Box
            component="img"
            alt="Dasion Guider - AI-Powered Guidance Platform"
            src="/assets/images/cover/cover-2.webp"
            sx={{
              top: 0,
              width: 1,
              height: 1,
              objectFit: 'cover',
              position: 'absolute',
            }}
          />
          <Label
            variant="outlined"
            color="success"
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            FEATURED
          </Label>
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Dasion Guider™
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            AI-Powered Guidance Platform
          </Typography>
          <Typography variant="body2" paragraph>
            Advanced AI guidance system designed to provide intelligent assistance and decision support for businesses and individuals.
          </Typography>
          
          <Button
            variant="contained"
            color="secondary"
            href="https://dasion-guider.com/"
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{ mt: 1 }}
          >
            Explore Platform
          </Button>
        </Stack>
      </Card>
    );
  }

  if (isAutismCare) {
    return (
      <Card sx={{ borderRadius: '1.2em', cursor: 'pointer' }}>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          <Box
            component="img"
            alt="AutismCare - Voice-Based AI for Autism Screening"
            src="/assets/images/cover/cover-3.webp"
            sx={{
              top: 0,
              width: 1,
              height: 1,
              objectFit: 'cover',
              position: 'absolute',
            }}
          />
          <Label
            variant="outlined"
            color="warning"
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            INNOVATIVE
          </Label>
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            AutismCare™
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Voice-Based AI for Autism Screening
          </Typography>
          <Typography variant="body2" paragraph>
            An AI-powered platform that analyzes voice, tone, and speech patterns to support autism screening and longitudinal care. Designed for clinical researchers, therapists, and families.
          </Typography>
          
          <Button
            variant="contained"
            color="warning"
            href="https://autismcare.dasionai.com/"
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{ mt: 1 }}
          >
            Learn More
          </Button>
        </Stack>
      </Card>
    );
  }

  // Regular product rendering for non-special products
  const renderStatus = (
    <Label
      // component="span"
      variant="outlined"
      color={(product.status === 'sale' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.coverUrl}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {product.priceSale && fnCurrency(product.priceSale)}
      </Typography>
      &nbsp;
      {fnCurrency(product.price)}
    </Typography>
  );

  return (
    <Card sx={{borderRadius: '1.2em'}}>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {product.status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
        </Link>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={product.colors} />
          {renderPrice}
        </Box>
      </Stack>
    </Card>
  );
}
