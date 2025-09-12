import { render, screen } from '@testing-library/react';
import { BlogHeader } from '../blog-header';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage({
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

describe('BlogHeader', () => {
  it('renders the logo', () => {
    render(<BlogHeader />);
    
    // Check for logo
    const logo = screen.getByAltText('CEOWRITES Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/eoguguaLogo.png');
  });

  it('has the correct navigation links', () => {
    render(<BlogHeader />);
    
    // Check for home link
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toHaveAttribute('href', '/');
    
    // Check for technology link
    const techLink = screen.getByRole('link', { name: /technology/i });
    expect(techLink).toHaveAttribute('href', '/blog/category/technology');
    
    // Check for business link
    const businessLink = screen.getByRole('link', { name: /business/i });
    expect(businessLink).toHaveAttribute('href', '/blog/category/business');
  });
});
