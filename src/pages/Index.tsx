import DashboardLayout from "@/components/DashboardLayout";
import FactCheckingFeed from "@/components/FactCheckingFeed";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Fact-Checking Dashboard</h1>
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2">
            <FactCheckingFeed />
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h2 className="font-semibold mb-2">Quick Stats</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Verified Claims</span>
                  <span className="font-medium text-success">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Debunked Claims</span>
                  <span className="font-medium text-error">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pending Review</span>
                  <span className="font-medium text-accent">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;