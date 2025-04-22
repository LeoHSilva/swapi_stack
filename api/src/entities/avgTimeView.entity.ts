import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  expression: `
    SELECT 
      AVG(time_taken) AS avg
    FROM
      log
    WHERE
      created_on >= NOW() - INTERVAL '5 MINUTES'
  `,
})
export class AvgTimeView {
  @ViewColumn()
  avg: string;
}
