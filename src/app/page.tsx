import { Button } from '@/shared/ui/Button';
import { Sidebar } from '@/widgets/Sidebar';

export default function Home() {
    console.log(typeof window === 'undefined' ? 'server' : 'client');

    console.log(process.env);
    return (
        <main>
            <Sidebar />
            <Button>Test</Button>
        </main>
    );
}
