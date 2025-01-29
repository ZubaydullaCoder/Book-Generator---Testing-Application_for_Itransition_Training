import { setupFaker } from '@/lib/utils/faker-setup';
import { generateISBN } from '@/lib/generators/isbn';
import { generateReviews } from '@/lib/generators/reviews';

export function generateBook(locale, seed, pageIndex, bookIndex, settings) {
  const uniqueSeed = seed + pageIndex * 1000 + bookIndex;
  const fakerLocalized = setupFaker(locale, uniqueSeed); // For localized data
  const fakerISBN = setupFaker('en_US', uniqueSeed); // For ISBN only

  const authors = Array.from(
    { length: fakerLocalized.number.int({ min: 1, max: 3 }) },
    () => fakerLocalized.person.fullName()
  );

  return {
    id: pageIndex * 20 + bookIndex + 1,
    isbn: generateISBN(fakerISBN),
    title: fakerLocalized.commerce.productName(),
    authors,
    publisher: fakerLocalized.company.name(),
    description: fakerLocalized.lorem.sentence(),
    coverUrl: `https://picsum.photos/seed/${uniqueSeed}/400/600`,
    publishedAt: fakerLocalized.date.past(),
    likes: generateLikes(fakerLocalized, settings.likesPerBook),
    reviews: generateReviews(fakerLocalized, settings.reviewsPerBook),
  };
}

function generateLikes(faker, avgLikesPerBook) {
  // For whole number part, always add that many likes
  const baseNumber = Math.floor(avgLikesPerBook);

  // For fractional part, use it as probability for one more like
  const fractionalPart = avgLikesPerBook - baseNumber;

  // Generate random number between 0 and 1
  const shouldAddExtra = faker.number.float() < fractionalPart;

  // Return base number of likes plus potentially one more
  return baseNumber + (shouldAddExtra ? 1 : 0);
}
