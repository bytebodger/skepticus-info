import { useEffect, useMemo, useRef, useState, type TouchEvent } from 'react';
import { galleryImages } from '../data/gallery';
import { SEO } from '../seo';

export function GalleryPage()
{
    const swipeStartX = useRef<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [filterValue, setFilterValue] = useState('');

    const sortedImages = useMemo(
        () => [...galleryImages].sort((a, b) => a.title.localeCompare(b.title)),
        [],
    );

    const filteredImages = useMemo(() =>
    {
        const normalizedFilter = filterValue.trim().toLowerCase();

        if (!normalizedFilter)
        {
            return sortedImages;
        }

        return sortedImages.filter((item) => item.title.toLowerCase().includes(normalizedFilter));
    }, [filterValue, sortedImages]);

    const selected = selectedIndex === null
        ? null
        : filteredImages[selectedIndex] ?? null;

    const closeLightbox = () => setSelectedIndex(null);

    const showPreviousImage = () =>
    {
        if (filteredImages.length === 0)
        {
            return;
        }

        setSelectedIndex((currentIndex) =>
        {
            if (currentIndex === null)
            {
                return currentIndex;
            }

            return (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        });
    };

    const showNextImage = () =>
    {
        if (filteredImages.length === 0)
        {
            return;
        }

        setSelectedIndex((currentIndex) =>
        {
            if (currentIndex === null)
            {
                return currentIndex;
            }

            return (currentIndex + 1) % filteredImages.length;
        });
    };

    const handleLightboxTouchStart = (event: TouchEvent<HTMLDivElement>) =>
    {
        if (event.touches.length !== 1)
        {
            return;
        }

        swipeStartX.current = event.touches[0].clientX;
    };

    const handleLightboxTouchEnd = (event: TouchEvent<HTMLDivElement>) =>
    {
        const startX = swipeStartX.current;
        swipeStartX.current = null;

        if (startX === null || event.changedTouches.length === 0)
        {
            return;
        }

        const deltaX = event.changedTouches[0].clientX - startX;

        // Ignore tiny drags so taps and slight movement do not trigger navigation.
        if (Math.abs(deltaX) < 50)
        {
            return;
        }

        if (deltaX < 0)
        {
            showNextImage();
            return;
        }

        showPreviousImage();
    };

    useEffect(() =>
    {
        if (selectedIndex === null)
        {
            return;
        }

        if (filteredImages.length === 0)
        {
            setSelectedIndex(null);
            return;
        }

        if (selectedIndex > filteredImages.length - 1)
        {
            setSelectedIndex(filteredImages.length - 1);
        }
    }, [filteredImages.length, selectedIndex]);

    useEffect(() =>
    {
        if (!selected)
        {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (event: KeyboardEvent) =>
        {
            if (event.key === 'Escape')
            {
                setSelectedIndex(null);
            }

            if (event.key === 'ArrowLeft')
            {
                event.preventDefault();
                setSelectedIndex((currentIndex) =>
                {
                    if (currentIndex === null || filteredImages.length === 0)
                    {
                        return currentIndex;
                    }

                    return (currentIndex - 1 + filteredImages.length) % filteredImages.length;
                });
            }

            if (event.key === 'ArrowRight')
            {
                event.preventDefault();
                setSelectedIndex((currentIndex) =>
                {
                    if (currentIndex === null || filteredImages.length === 0)
                    {
                        return currentIndex;
                    }

                    return (currentIndex + 1) % filteredImages.length;
                });
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () =>
        {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [selected, filteredImages.length]);

    return (
        <section aria-labelledby='gallery-heading'>
            <SEO
                title='Skepticus Info Hub | Gallery'
                description='Browse and open archived Skepticus images in a full-screen lightbox.'
            />
            <header className='page-header'>
                <h2 id='gallery-heading'>Gallery</h2>
                <p className='muted'>Browse thumbnails from past videos and open any image full-screen.</p>
            </header>

            <div className='gallery-filter-wrap'>
                <label htmlFor='gallery-filter'
                    className='sr-only'>
                    Filter gallery images
                </label>
                <input
                    id='gallery-filter'
                    type='text'
                    className='gallery-filter'
                    value={filterValue}
                    onChange={(event) => setFilterValue(event.target.value)}
                    placeholder='Filter gallery by title'
                    aria-label='Filter gallery images'
                />
            </div>

            <ul className='gallery-list'
                aria-label='Gallery images'>
                {filteredImages.map((item, index) => (
                    <li key={item.location}
                        className='gallery-item'>
                        <button
                            type='button'
                            className='gallery-thumb-button'
                            onClick={() => setSelectedIndex(index)}
                            aria-label={`Open gallery image: ${item.title}`}
                        >
                            <img
                                src={item.location}
                                alt={item.title}
                                className='gallery-thumb-image'
                                loading='lazy'
                            />
                            <span className='gallery-thumb-title'>{item.title}</span>
                        </button>
                    </li>
                ))}
            </ul>

            {filteredImages.length === 0 ? (
                <p className='muted'>No gallery images match your filter.</p>
            ) : null}

            {selected ? (
                <div className='gallery-lightbox'
                    role='dialog'
                    aria-modal='true'
                    aria-label={selected.title}
                    onClick={closeLightbox}>
                    <div className='gallery-lightbox-toolbar'
                        onClick={(event) => event.stopPropagation()}>
                        <button
                            type='button'
                            className='gallery-lightbox-close'
                            onClick={closeLightbox}
                            aria-label='Close gallery image'>
                            Close
                        </button>
                    </div>
                    <div className='gallery-lightbox-stage'
                        onClick={(event) => event.stopPropagation()}
                        onTouchStart={handleLightboxTouchStart}
                        onTouchEnd={handleLightboxTouchEnd}>
                        <button
                            type='button'
                            className='gallery-lightbox-stage-nav gallery-lightbox-stage-nav-left'
                            onClick={showPreviousImage}
                            aria-label='Previous gallery image'>
                            {'<'}
                        </button>
                        <img
                            src={selected.location}
                            alt={selected.title}
                            className='gallery-lightbox-image'
                        />
                        <button
                            type='button'
                            className='gallery-lightbox-stage-nav gallery-lightbox-stage-nav-right'
                            onClick={showNextImage}
                            aria-label='Next gallery image'>
                            {'>'}
                        </button>
                    </div>
                </div>
            ) : null}
        </section>
    );
}
