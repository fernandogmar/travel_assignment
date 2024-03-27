import { TravelCountryDestionations } from '@/components/TravelCountryDestinations';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <TravelCountryDestionations/>
    </QueryClientProvider>
  )
}

export default App
