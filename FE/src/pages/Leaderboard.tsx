import { useEffect, useState } from "react";
import { CONSTANTS } from "./constants";

export default function Leaderboard({ name }: any) {
  const [data, setData] = useState<any[]>([]);


  useEffect(() => {
    fetch(`${CONSTANTS.API_BASE_URL}/leaderboard?name=${name}`)
      .then((r) => r.json())
      .then((data)=>setData(data.results));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
              <tr>
                <th>Player 1</th>
                <th>Player 2</th>
                <th>Winner</th>
             </tr>
        </thead>
        <tbody>
            {
                data.map((p, i) => (
                    <tr key={i}>
                        <td>{p.player1}</td>
                        <td>{p.player2}</td>
                        <td>{p.winner}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
}