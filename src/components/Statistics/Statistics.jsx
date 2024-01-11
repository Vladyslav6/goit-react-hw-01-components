import './Statistics.css';

const Statistics = ({ title, stats }) => {
  const StatsPercent = stats.map(item => (
    <li className="item" key={item.id}>
      <span className="label">{item.label}</span>,
      <span className="percentage">{item.percentage}$</span>
    </li>
  ));

  return (
    <>
      <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">{StatsPercent}</ul>
      </section>
    </>
  );
};

export default Statistics;
