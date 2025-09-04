import { useState, useCallback } from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

import * as productService from "../services/productService";

import { ProductItem } from '../components/product/ProductItem';
import { ProductSort } from '../components/product/ProductSort';
import { CartIcon } from '../components/product/CartIcon';
import { FiltersProps, ProductFilters } from '../components/product/ProductFilters';

// ----------------------------------------------------------------------

const GENDER_OPTIONS = [
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'kids', label: 'Kids' },
];

const CATEGORY_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'shoes', label: 'Shoes' },
  { value: 'apparel', label: 'Apparel' },
  { value: 'accessories', label: 'Accessories' },
];

const RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];

const PRICE_OPTIONS = [
  { value: 'below', label: 'Below $25' },
  { value: 'between', label: 'Between $25 - $75' },
  { value: 'above', label: 'Above $75' },
];

const COLOR_OPTIONS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

const defaultFilters = {
  price: '',
  gender: [GENDER_OPTIONS[0].value],
  colors: [COLOR_OPTIONS[4]],
  rating: RATING_OPTIONS[0],
  category: CATEGORY_OPTIONS[0].value,
};

function ProductsView() {
  const [sortBy, setSortBy] = useState('featured');
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState<FiltersProps>(defaultFilters);
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);
  
  // Filter to only show Dasion products
  const allProducts = productService.getAllItems();
  const dasionProducts = allProducts.filter((product: any) => 
    product.name === 'Dasion Hugvoice' || product.name === 'Dasion Guider' || product.name === 'AutismCare' || product.name === 'ParkinsonCare'
  );
  
  const [products] = useState(dasionProducts);

  // Filter products based on search query
  const filteredProducts = dasionProducts.filter((product: any) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Product statistics
  const totalProducts = dasionProducts.length;
  const featuredProducts = dasionProducts.filter((product: any) => 
    product.name === 'Dasion Hugvoice' || product.name === 'Dasion Guider'
  ).length;

  const handleOpenFilter = useCallback(() => {
    setOpenFilter(true);
  }, []);

  const handleCloseFilter = useCallback(() => {
    console.log(filters)
    setOpenFilter(false);
  }, []);

  const handleSort = useCallback((newSort: string) => {
    setSortBy(newSort);
  }, []);

  const handleSetFilters = useCallback((updateState: Partial<FiltersProps>) => {
    setFilters((prevValue) => ({ ...prevValue, ...updateState }));
  }, []);

  const handleToggleFavorite = useCallback((productId: string) => {
    setFavoriteProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const canReset = Object.keys(filters).some(
    (key) =>
      filters[key as keyof FiltersProps] !==
      defaultFilters[key as keyof FiltersProps]
  );

  return (
    <Container maxWidth="xl">
      {/* Hero Section */}
      <Paper 
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 3,
          p: 4,
          mb: 4,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Box position="relative" zIndex={1}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Dasion AI Solutions
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 3, maxWidth: 600 }}>
            Discover our cutting-edge AI-powered products designed to transform healthcare, mental health, and personal guidance.
          </Typography>
          
          {/* Search Bar */}
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              placeholder="Search Dasion products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'rgba(255,255,255,0.7)' }} />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255,0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255,0.5)',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                    '&::placeholder': {
                      color: 'rgba(255,255,255,0.7)',
                      opacity: 1,
                    },
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Paper>

      {/* Product Statistics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: 2,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    {totalProducts}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Total Products
                  </Typography>
                </Box>
                <TrendingUpIcon sx={{ fontSize: 40, opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            borderRadius: 2,
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    {featuredProducts}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Featured Solutions
                  </Typography>
                </Box>
                <StarIcon sx={{ fontSize: 40, opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            color: 'white',
            borderRadius: 2,
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    24/7
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    AI Support
                  </Typography>
                </Box>
                <VisibilityIcon sx={{ fontSize: 40, opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ 
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            color: 'white',
            borderRadius: 2,
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    99.9%
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Uptime
                  </Typography>
                </Box>
                <TrendingUpIcon sx={{ fontSize: 40, opacity: 0.8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filters and Sort Section */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
            Our Products
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {filteredProducts.length} of {totalProducts} products found
          </Typography>
        </Box>

        <Box gap={1} display="flex" flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            canReset={canReset}
            filters={filters}
            onSetFilters={handleSetFilters}
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            onResetFilter={() => setFilters(defaultFilters)}
            options={{
              genders: GENDER_OPTIONS,
              categories: CATEGORY_OPTIONS,
              ratings: RATING_OPTIONS,
              price: PRICE_OPTIONS,
              colors: COLOR_OPTIONS,
            }}
          />

          <ProductSort
            sortBy={sortBy}
            onSort={handleSort}
            options={[
              { value: 'featured', label: 'Featured' },
              { value: 'newest', label: 'Newest' },
              { value: 'priceDesc', label: 'Price: High-Low' },
              { value: 'priceAsc', label: 'Price: Low-High' },
            ]}
          />
        </Box>
      </Box>

      {/* Cart Icon */}
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <CartIcon totalItems={4} />
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {filteredProducts.map((product: any) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Box position="relative">
              <ProductItem product={product} />
              
              {/* Favorite Button */}
              <Tooltip title={favoriteProducts.includes(product.id) ? "Remove from favorites" : "Add to favorites"}>
                <IconButton
                  onClick={() => handleToggleFavorite(product.id)}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,1)',
                    },
                    zIndex: 10,
                  }}
                >
                  <FavoriteIcon 
                    sx={{ 
                      color: favoriteProducts.includes(product.id) ? '#ff4444' : '#ccc',
                      fontSize: 20,
                    }} 
                  />
                </IconButton>
              </Tooltip>
              
              {/* Product Badge */}
              {product.name === 'Dasion Hugvoice' && (
                <Chip
                  label="Most Popular"
                  color="primary"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 10,
                    fontWeight: 600,
                  }}
                />
              )}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <Box textAlign="center" py={8}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No products found matching "{searchQuery}"
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your search terms or filters
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default ProductsView;
