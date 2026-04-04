import { AnimatedGroup } from '@/components/motion-primitives/animated-group';

export function AnimatedGroupPreset() {
    return (
        <AnimatedGroup
            className='grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4'
            preset='scale'
        >
            <img
                src='/images/cover/5.jpeg'
                alt='impressionist painting, uploaded to Cosmos'
                className='h-auto w-full rounded-[4px]'
            />
            <img
                src='/images/cover/2.jpeg'
                alt='impressionist painting, uploaded to Cosmos'
                className='h-auto w-full rounded-[4px]'
            />
            <img
                src='/images/cover/3.jpeg'
                alt='impressionist painting, uploaded to Cosmos'
                className='h-auto w-full rounded-[4px]'
            />
            <img
                src='/images/cover/4.jpeg'
                alt='impressionist painting, uplo   aded to Cosmos'
                className='h-auto w-full rounded-[4px]'
            />
        </AnimatedGroup>
    );
}
