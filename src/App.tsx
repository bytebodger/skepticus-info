import { Navigate, Route, Routes } from 'react-router-dom';
import { BibleVersesPage } from './pages/BibleVersesPage';
import { ChristianQuizPage } from './pages/ChristianQuizPage';
import { Layout } from './components/Layout';
import { ContradictionsPage } from './pages/ContradictionsPage';
import { DashboardPage } from './pages/DashboardPage';
import { DocsPage } from './pages/DocsPage';
import { GalleryPage } from './pages/GalleryPage';
import { IllustrationsPage } from './pages/IllustrationsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProphecyScorecardPage } from './pages/ProphecyScorecardPage';
import { SoundboardPage } from './pages/SoundboardPage';
import { SourceLibraryPage } from './pages/SourceLibraryPage';
import { StreamToolkitPage } from './pages/StreamToolkitPage';
import { SyllogismBuilderPage } from './pages/SyllogismBuilderPage';
import { SyllogismsPage } from './pages/SyllogismsPage';
import { FailedPropheciesPage } from './pages/FailedPropheciesPage';

function App()
{
    return (
        <Routes>
            <Route element={
                <Layout/>}>
                <Route path='/'
                    element={
                        <DashboardPage/>}/>
                <Route path='/prophecy-scorecard'
                    element={
                        <ProphecyScorecardPage/>}/>
                <Route path='/source-library'
                    element={
                        <SourceLibraryPage/>}/>
                <Route path='/stream-toolkit'
                    element={
                        <StreamToolkitPage/>}/>
                <Route path='/soundboard'
                    element={
                        <SoundboardPage/>}/>
                <Route path='/illustrations'
                    element={
                        <IllustrationsPage/>}/>
                <Route path='/gallery'
                    element={
                        <GalleryPage/>}/>
                <Route path='/bible-verses'
                    element={
                        <BibleVersesPage/>}/>
                <Route path='/docs'
                    element={
                        <DocsPage/>}/>
                <Route path='/docs/:slug'
                    element={
                        <DocsPage/>}/>
                <Route path='/christian-quiz'
                    element={
                        <ChristianQuizPage/>}/>
                <Route path='/contradictions'
                    element={
                        <ContradictionsPage/>}/>
                <Route path='/syllogisms'
                    element={
                        <SyllogismsPage/>}/>
                <Route path='/syllogism-builder'
                    element={
                        <SyllogismBuilderPage/>}/>
                <Route path='/failed-prophecies'
                    element={
                        <FailedPropheciesPage/>}/>
                <Route path='/home'
                    element={
                        <Navigate to='/'
                            replace/>}/>
                <Route path='*'
                    element={
                        <NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
