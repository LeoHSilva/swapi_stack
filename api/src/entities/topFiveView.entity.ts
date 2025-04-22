import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  expression: `
    SELECT 
      search,
      COUNT(*) AS count
    FROM
      log
    WHERE
      created_on >= NOW() - INTERVAL '5 MINUTES'
    GROUP BY
      search
    ORDER BY
      count DESC
    LIMIT 5
  `,
})
export class TopFiveView {
  @ViewColumn()
  search: string;

  @ViewColumn()
  count: number;
}
