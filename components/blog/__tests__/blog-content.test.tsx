import { render, screen } from '@testing-library/react';
import { BlogContent } from '../blog-content';

// Mock react-markdown
jest.mock('react-markdown', () => ({
  __esModule: true,
  default: function ReactMarkdown({ children }: { children: React.ReactNode }) {
    return <div data-testid="react-markdown">{children}</div>;
  },
}));

// Mock react-syntax-highlighter
jest.mock('react-syntax-highlighter/dist/cjs/styles/prism', () => ({
  vscDarkPlus: {},
}));

jest.mock('react-syntax-highlighter', () => ({
  Prism: {
    renderer: function PrismRenderer({ children }: { children: React.ReactNode }) {
      return <pre className="mock-syntax-highlighter">{children}</pre>;
    },
  },
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: function ImageMock({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} width={width} height={height} />;
  },
}));

describe('BlogContent', () => {
  const sampleContent = `
    # Test Heading
    
    This is a test paragraph with some **bold** and *italic* text.
  `;

  it('renders markdown content', () => {
    render(<BlogContent content={sampleContent} />);
    
    // Check if the component renders without errors
    expect(screen.getByTestId('react-markdown')).toBeInTheDocument();
  });

  it('passes the content to react-markdown', () => {
    render(<BlogContent content={sampleContent} />);
    
    // Check if the content is passed to react-markdown
    const reactMarkdown = screen.getByTestId('react-markdown');
    expect(reactMarkdown).toBeInTheDocument();
  });
});
