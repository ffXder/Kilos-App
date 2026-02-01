import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/480892821_1699254340944375_149606655962905961_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHC8Kv9x6V4C1Ke1rl4IXcjsqBut_lK2f2yoG63-UrZ_ZYFvQuEYEB6qLeyJzsbpiFriKwql8LtZHoo_aaREXTi&_nc_ohc=p8nyXFSudtkQ7kNvwH-IA8l&_nc_oc=AdmDccc0CcMrbU4AV6sElj-gZK864qEhdGCzkxvhvu5bLsqPMdW6LVsdbwAlMYHQ-20&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=A2BlT5buhZLVjkHnn6gsDw&oh=00_AftLQ5r5FEy_cEW1_ezvJNAmovWinXkTMHpP0VlRWv9m2g&oe=6984D916" 
          alt="Vite logo" height={300}/>
          <img src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/579187648_1478671306755231_510618972390812122_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEpCviMC5UpQ4KPf4z-HH7zIhAixS5cdZoiECLFLlx1mlJeE6Jf24BH_n6V_O2QG5A-0zyAD0Y7YeF2z82b8GH3&_nc_ohc=je9XLDPLMt8Q7kNvwGeGFpT&_nc_oc=Adkwf0OsHVXwhuTC2B2tAwdjvF5ZuYQ392GDXWizLGDVCB5M4vlHJwgmj9iygkduwOA&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&oh=03_Q7cD4gEco492aFQvsPIITPreSR5RetJYMuhjxVdYgZgT-wO05g&oe=69A6669D" 
          alt="React logo" height={300} width={250}/>

      </div>
      <h1>Jabyer + Kort</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
