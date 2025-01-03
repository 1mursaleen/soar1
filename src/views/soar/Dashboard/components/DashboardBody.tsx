import QuickTransfer from './QuickTransfer';
import BalanceHistory from './BalanceHistory';
import ExpenseStatistics from './ExpenseStatistics';
import WeeklyActivity from './WeeklyActivity';
import RecentTransactions from './RecentTransactions';
import CreditCards from './CreditCards';

const DashboardBody = () => {
  return (
    <>
      {/* Section for Credit Cards and Recent Transactions */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        role="region"
        aria-labelledby="credit-cards-transactions"
      >
        <h2 id="credit-cards-transactions" className="sr-only">
          Credit Cards and Recent Transactions
        </h2>
        <CreditCards className="lg:col-span-2" />
        <RecentTransactions className="lg:col-span-1" />
      </div>

      {/* Section for Weekly Activity and Expense Statistics */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        role="region"
        aria-labelledby="weekly-activity-expense-statistics"
      >
        <h2 id="weekly-activity-expense-statistics" className="sr-only">
          Weekly Activity and Expense Statistics
        </h2>
        <WeeklyActivity className="lg:col-span-2" />
        <ExpenseStatistics />
      </div>

      {/* Section for Quick Transfer and Balance History */}
      <div
        className="grid grid-cols-1 lg:grid-cols-5 gap-4"
        role="region"
        aria-labelledby="quick-transfer-balance-history"
      >
        <h2 id="quick-transfer-balance-history" className="sr-only">
          Quick Transfer and Balance History
        </h2>
        <QuickTransfer className="lg:col-span-2" />
        <BalanceHistory className="lg:col-span-3" />
      </div>
    </>
  );
};

export default DashboardBody;
