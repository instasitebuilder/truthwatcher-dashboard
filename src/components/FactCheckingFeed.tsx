import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

type FactCheckItem = {
  id: string;
  content: string;
  confidence: number;
  status: "verified" | "debunked" | "flagged";
  timestamp: string;
};

const mockData: FactCheckItem[] = [
  {
    id: "1",
    content: "Climate change is causing record-breaking temperatures globally",
    confidence: 0.95,
    status: "verified",
    timestamp: "2024-02-20T10:30:00Z",
  },
  {
    id: "2",
    content: "5G networks are spreading viruses",
    confidence: 0.88,
    status: "debunked",
    timestamp: "2024-02-20T10:28:00Z",
  },
  {
    id: "3",
    content: "New study suggests link between diet and longevity",
    confidence: 0.75,
    status: "flagged",
    timestamp: "2024-02-20T10:25:00Z",
  },
];

const StatusIcon = ({ status }: { status: FactCheckItem["status"] }) => {
  switch (status) {
    case "verified":
      return <CheckCircle className="h-5 w-5 text-success" />;
    case "debunked":
      return <XCircle className="h-5 w-5 text-error" />;
    case "flagged":
      return <AlertTriangle className="h-5 w-5 text-accent" />;
  }
};

const FactCheckingFeed = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle>Live Fact-Checking Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockData.map((item) => (
            <div
              key={item.id}
              className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-accent/5 transition-colors"
            >
              <StatusIcon status={item.status} />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.content}</p>
                <div className="mt-1 flex items-center space-x-2">
                  <Badge
                    variant="outline"
                    className={
                      item.confidence > 0.8
                        ? "bg-success/10 text-success"
                        : item.confidence > 0.6
                        ? "bg-accent/10 text-accent"
                        : "bg-error/10 text-error"
                    }
                  >
                    {Math.round(item.confidence * 100)}% confidence
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FactCheckingFeed;