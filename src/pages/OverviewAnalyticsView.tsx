import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <>
      {/* Welcome Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 3,
        p: 4,
        mb: 5,
        color: 'white',
        textAlign: 'center'
      }}>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          Welcome to Dasion
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
          Empowering businesses with intelligent solutions and data-driven insights
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{ 
            backgroundColor: 'white', 
            color: '#667eea',
            '&:hover': { backgroundColor: '#f5f5f5' }
          }}
        >
          Explore Our Solutions
        </Button>
      </Box>

      {/* Company Overview Section */}
      <Typography variant="h4" sx={{ mb: 3, color: 'text.primary' }}>
        About Dasion
      </Typography>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: '100%', p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              We are dedicated to transforming businesses through innovative technology solutions. 
              Our platform provides comprehensive tools for managing customers, orders, and business operations.
            </Typography>
            <Typography variant="body1">
              With years of experience in business intelligence and customer relationship management, 
              we help companies grow and succeed in today's competitive market.
            </Typography>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: '100%', p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
              What We Offer
            </Typography>
            <Typography variant="body1" paragraph>
              • Comprehensive CRM solutions for modern businesses
            </Typography>
            <Typography variant="body1" paragraph>
              • Advanced analytics and reporting capabilities
            </Typography>
            <Typography variant="body1" paragraph>
              • Intuitive user interface designed for efficiency
            </Typography>
            <Typography variant="body1">
              • Scalable platform that grows with your business
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Actions Section */}
      {/* <Typography variant="h4" sx={{ mb: 3, color: 'text.primary' }}>
        Quick Actions
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ textAlign: 'center', p: 3, cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
            <Box sx={{ fontSize: 48, mb: 2, color: 'primary.main' }}>👥</Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Manage Customers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              View and manage your customer database
            </Typography>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ textAlign: 'center', p: 3, cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
            <Box sx={{ fontSize: 48, mb: 2, color: 'secondary.main' }}>📦</Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              View Orders
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Track and manage customer orders
            </Typography>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ textAlign: 'center', p: 3, cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
            <Box sx={{ fontSize: 48, mb: 2, color: 'warning.main' }}>🛍️</Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Browse Products
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explore our product catalog
            </Typography>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ textAlign: 'center', p: 3, cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
            <Box sx={{ fontSize: 48, mb: 2, color: 'success.main' }}>📊</Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Sales Analytics
            </Typography>
            <Typography variant="body2" color="text.secondary">
              View detailed business insights
            </Typography>
          </Card>
        </Grid>
      </Grid> */}
    </>
  );
}
