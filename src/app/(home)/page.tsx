import { AttendanceCalendar } from "@/components/attendance-calendar";
import { AttendanceStatistics } from "@/components/attendance-statistics";
import { MainModalityCard } from "@/components/main-modality-card";
import { MultiModalitiesCard } from "@/components/multi-modalities-card";
import { SummaryProgressChart } from "@/components/progress-chart/summary-progress-chart";
import { ScheduleOverview } from "@/components/schedule-overview";

export default function Home() {
  return (
    <div className="grid flex-1 grid-cols-1 md:grid-cols-3 gap-4 p-4 h-full">
      <div className="md:col-span-2 flex-col gap-4 flex">
        <AttendanceStatistics />
        <div className="flex wrap gap-4">
          <ScheduleOverview />
          <AttendanceCalendar />
        </div>
        <SummaryProgressChart />
      </div>

      <div className="md:col-start-3 flex-col gap-4 flex">
        <MainModalityCard />
        <MultiModalitiesCard />
      </div>
    </div>
  )
}
