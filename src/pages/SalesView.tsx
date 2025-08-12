import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { _tasks, _posts, _timeline } from '../_mock';
import { AnalyticsNews } from '../components/analytics/AnalyticsNews';
import { AnalyticsTasks } from '../components/analytics/AnalyticsTasks';
import { AnalyticsCurrentVisits } from '../components/analytics/AnalyticsCurrentVisits';
import { AnalyticsOrderTimeline } from '../components/analytics/AnalyticsOrderTimeline';
import { AnalyticsWebsiteVisits } from '../components/analytics/AnalyticsWebsiteVisits';
import { AnalyticsWidgetSummary } from '../components/analytics/AnalyticsWidgetSummary';
import { AnalyticsTrafficBySite } from '../components/analytics/AnalyticsTrafficBySite';
import { AnalyticsCurrentSubject } from '../components/analytics/AnalyticsCurrentSubject';
import { AnalyticsConversionRates } from '../components/analytics/AnalyticsConversionRates';

// ----------------------------------------------------------------------

export function SalesView() {
  return (
    <>
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Sales Analytics
      </Typography>

      {/* Key Metrics Section */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Total Revenue"
            percent={12.5}
            total={2840000}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Active Customers"
            percent={8.2}
            total={12543}
            color="secondary"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-users.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Orders Completed"
            percent={15.3}
            total={1876}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-buy.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Customer Satisfaction"
            percent={4.1}
            total={98.7}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>
      </Grid>

      {/* Main Content Grid */}
      <Grid container spacing={3}>
        {/* Left Column - Charts */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <AnalyticsWebsiteVisits
                title="Performance Trends"
                subheader="Monthly performance overview"
                chart={{
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                  series: [
                    { name: 'Revenue', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                    { name: 'Growth', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
                  ],
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <AnalyticsConversionRates
                title="Conversion Rates"
                subheader="Customer acquisition efficiency"
                chart={{
                  categories: ['Website', 'Social', 'Email', 'Referral', 'Direct'],
                  series: [
                    { name: '2023', data: [44, 55, 41, 64, 22] },
                    { name: '2024', data: [53, 32, 33, 52, 13] },
                  ],
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <AnalyticsCurrentSubject
                title="Top Performing Areas"
                chart={{
                  categories: ['Sales', 'Marketing', 'Operations', 'Support', 'Development', 'Finance'],
                  series: [
                    { name: 'Efficiency', data: [80, 50, 30, 40, 100, 20] },
                    { name: 'Growth', data: [20, 30, 40, 80, 20, 80] },
                    { name: 'Quality', data: [44, 76, 78, 13, 43, 10] },
                  ],
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Right Column - Sidebar Content */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <AnalyticsOrderTimeline title="Recent Activity" list={_timeline} />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <AnalyticsCurrentVisits
                title="Geographic Distribution"
                chart={{
                  series: [
                    { label: 'North America', value: 3500 },
                    { label: 'Europe', value: 2500 },
                    { label: 'Asia Pacific', value: 2000 },
                    { label: 'Other Regions', value: 1000 },
                  ],
                }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <AnalyticsTrafficBySite
                title="Traffic Sources"
                list={[
                  { value: 'organic', label: 'Organic Search', total: 323234 },
                  { value: 'direct', label: 'Direct Traffic', total: 341212 },
                  { value: 'social', label: 'Social Media', total: 211213 },
                  { value: 'referral', label: 'Referrals', total: 143232 },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <AnalyticsTasks title="Priority Tasks" list={_tasks} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <AnalyticsNews title="Latest Updates" list={_posts.slice(0, 5)} />
        </Grid>
      </Grid>
    </>
  );
}

export default SalesView;
