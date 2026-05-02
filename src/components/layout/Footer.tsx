import Container from "@/components/ui/layout/Container";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200/70">
            <Container className="py-6 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
            </Container>
        </footer>
    );
}
