import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Welcome Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 3,
        p: { xs: 3, md: 6 },
        mb: 6,
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background pattern for visual interest */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 3, 
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              lineHeight: 1.2
            }}
          >
            Welcome to Dasion
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              opacity: 0.95,
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              lineHeight: 1.5,
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              letterSpacing: '0.01em'
            }}
          >
            Empowering businesses with intelligent solutions and data-driven insights
          </Typography>
          
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              backgroundColor: 'white', 
              color: '#667eea',
              fontWeight: 600,
              fontSize: '1.1rem',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              '&:hover': { 
                backgroundColor: '#f8f9fa',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                transform: 'translateY(-1px)'
              },
              transition: 'all 0.2s ease-in-out'
            }}
          >
            Explore Our Solutions
          </Button>
        </Box>
      </Box>

      {/* Company Overview Section */}
      <Typography 
        variant="h3" 
        sx={{ 
          mb: 4, 
          color: 'text.primary',
          fontWeight: 600,
          fontSize: { xs: '1.8rem', md: '2.2rem' },
          letterSpacing: '-0.01em'
        }}
      >
        About Dasion
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ 
            height: '100%', 
            p: 4,
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.05)',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              transform: 'translateY(-2px)'
            }
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 3, 
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '1.5rem',
                letterSpacing: '-0.01em'
              }}
            >
              Our Mission
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'text.primary',
                fontWeight: 400
              }}
            >
              We are dedicated to transforming businesses through innovative technology solutions. 
              Our platform provides comprehensive tools for managing customers, orders, and business operations.
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'text.primary',
                fontWeight: 400
              }}
            >
              With years of experience in business intelligence and customer relationship management, 
              we help companies grow and succeed in today's competitive market.
            </Typography>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ 
            height: '100%', 
            p: 4,
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.05)',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              transform: 'translateY(-2px)'
            }
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 3, 
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '1.5rem',
                letterSpacing: '-0.01em'
              }}
            >
              What We Offer
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'text.primary',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'flex-start',
                '&::before': {
                  content: '"•"',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mr: 1.5,
                  mt: 0.2
                }
              }}
            >
              Comprehensive CRM solutions for modern businesses
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'text.primary',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'flex-start',
                '&::before': {
                  content: '"•"',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mr: 1.5,
                  mt: 0.2
                }
              }}
            >
              Advanced analytics and reporting capabilities
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'text.primary',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'flex-start',
                '&::before': {
                  content: '"•"',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mr: 1.5,
                  mt: 0.2
                }
              }}
            >
              Intuitive user interface designed for efficiency
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'text.primary',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'flex-start',
                '&::before': {
                  content: '"•"',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mr: 1.5,
                  mt: 0.2
                }
              }}
            >
              Scalable platform that grows with your business
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

      {/* Footer Section */}
      <Box sx={{ 
        mt: 8,
        pt: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
        textAlign: 'center'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 2, 
            color: 'text.secondary',
            fontWeight: 500
          }}
        >
          Ready to get started?
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 4, 
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          Join thousands of businesses that trust Dasion to manage their operations and drive growth.
        </Typography>
        <Button 
          variant="outlined" 
          size="large"
          sx={{ 
            borderColor: 'primary.main',
            color: 'primary.main',
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: 2,
            '&:hover': { 
              borderColor: 'primary.dark',
              backgroundColor: 'primary.main',
              color: 'white'
            },
            transition: 'all 0.2s ease-in-out'
          }}
        >
          Contact Sales
        </Button>
      </Box>
    </Container>
  );
}
