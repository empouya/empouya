import Container from "@/components/ui/layout/Container";

export default function Footer() {
    return (
        <footer className="border-t">
            <Container className="py-4 text-center text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
            </Container>
        </footer>
    );
}
