import concurrently from 'concurrently'

concurrently([
    {
        name: 'client',
        command: 'bun run dev',
        cwd: './packages/client',
        prefixColor: 'blue',
    },
    {
        name: 'server',
        command: 'bun run dev',
        cwd: './packages/server',
        prefixColor: 'green',
    }
])