import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.title}>
          <th className={css.theadTitle}>Type</th>
          <th className={css.theadTitle}>Amount</th>
          <th className={css.theadTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.titleTr}>
            <td className={css.tbodyTitle}>{type}</td>
            <td className={css.tbodyTitle}>{amount}</td>
            <td className={css.tbodyTitle}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
