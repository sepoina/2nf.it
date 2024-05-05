import React from 'react'

export const MultiIcon = React.memo(({ className = 'w-5 h-5', kind, selected }) => {

  // indice delle icone in ordine (4 per riga)
  const index = [
    'bug',
    'code',
    'experiment',
    'cube',
    //
    'restart',
    'refresh',
    'external',
    'maximize',
    //
    'minimize',
    'toPortrait',
    'toLandscape'
  ].indexOf(kind);
  // non trovo icona
  if (index == -1) return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" className={className} viewBox={`0 0 24 24`}></svg>);
  // trovo icona
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      viewBox={`${index % 4 * 24} ${Math.floor(index / 4) * 24}  24 24`}>
      {
        [
         /* bug */ <path d="M12.081 20.963c4.583 0 6.008-3.561 6.008-8.187 0-5.204-1.908-8.322-6.111-8.327m9.049 17.362l-3.796-3.791m5.422-3.023l-2.301-.402-2.301-.402m4.316-5.673L17.94 9.705m-3.727-7.581v2.501m-2.132 16.337c-4.583 0-6.21-3.561-6.21-8.187 0-5.204 1.908-8.322 6.111-8.327M6.019 9.705h11.924m-5.863 11.257l-.059-11.257M1.592 8.519l4.428 1.186m3.727-7.581v2.501M2.932 21.81l3.796-3.791m-5.422-3.023l4.601-.804" />,
         /* code */ <path d={"M40.755 17.156l2.626-2.626 2.626-2.626-5.253-5.253m-9.504 0l-5.253 5.253 5.253 5.253m6.953-14.708" + (!selected && "l-4.202 18.911")} />,
         /* experiment */ <path d="M56.546 5.078l.167 5.367c.06 1.924-2.202 4.024-3.287 5.904-2.008 3.479-2.095 5.923 6.469 5.923m3.35-17.195l-.167 5.367c-.06 1.924 2.202 4.024 3.287 5.904 2.008 3.479 2.095 5.923-6.469 5.923m-1.546-10.929h1.479m-1.513-1.479h2.218m-2.218-1.479h1.479m-1.582-1.479h2.218M54 15.731c6.843 2.97 4.321-2.558 13.134 2.574m-2.19-14.851a5.212 1.456 0 0 1-5.15 1.456 5.212 1.456 0 0 1-5.273-1.421 5.212 1.456 0 0 1 5.025-1.49 5.212 1.456 0 0 1 5.392 1.386" />,
         /* cube */ <path d="M83.977 11.963v9.8M75.294 6.996l4.342 2.484 4.342 2.484 8.505-4.91M83.977 2.21l-8.683 4.786-.068 9.792 8.751 4.976 8.682-4.93.004-9.678z" />,
         /* restart */ <path d="M12.886 32.009v4.319h3.636m-12.663-.291c.473-9.002 10.466-11.013 15.143-6.49 5.081 4.912 3.538 14.376-6.078 15.583M2.048 32.88l1.811 3.156 2.757-2.279" />,
         /* refresh */ <path d="M40.56 44.95c6.78-5.46 6.18-13.57.27-16.83a12.2 12.2 0 0 0-4.88-1.38m9.49 18.48h-5.12v-5.15M31.5 27.13c-8.34 6.72-5.5 17.45 4.61 18.21m-9.49-18.47h5.12v5.15" />,
          <path d="M60.29 31.751h4.297v4.296m-5.57 1.174l5.21-5.21M50.64 30.685v14.646h15.099M55.337 26.695h13.119c.501 0 .905.403.905.905v12.978c0 .501-.403.905-.905.905H55.337c-.501 0-.905-.403-.905-.905V29.829 27.6c0-.501.403-.905.905-.905z" />,
          <path d="M78.822 45.375h-4.197v-4.196m5.441-1.147l-5.089 5.089m3.846-18.496h-4.197v4.196m5.441 1.147l-5.089-5.089m14.201 18.496h4.197v-4.196m-5.441-1.147l5.089 5.089m-3.846-18.496h4.197v4.196m-5.441 1.147l5.089-5.089" />,
          <path d="M4.045 63.792h4.366v4.365m-5.66 1.193l5.294-5.294m-4-7.848h4.366v-4.365m-5.66-1.193l5.294 5.294m11.997 7.848h-4.366v4.365m5.66 1.193l-5.294-5.294m4-7.733h-4.366v-4.365m5.66-1.193l-5.294 5.294" />,
           /* toPortrait */ <g>,
            <path d="M44.293 61.245v8.167H26.783v-8.167z" strokeDasharray="0.3,4.0" />
            <path d="M39.821 52.197a4.281 4.281 0 0 1 4.548 4.028m-4.08-5.639l-1.744 1.563 1.563 1.744m-13.325-1.988h8.167v17.511h-8.167z" />
          </g>,
           /* toLandscape */ <g>
            <path d="M59.14 50.769H50.5v18.524h8.64z" strokeDasharray="0.3,4.0"  />
            <path d="M68.446 55.677a4.528 4.528 0 0 0-4.26-4.811m5.965 4.316l-1.653 1.845-1.845-1.653m2.103 14.096v-8.64H50.232v8.64z" />
          </g>
        ][index]
      }
    </svg>);
});

