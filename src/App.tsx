import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CounterApologeticsPage } from './pages/CounterApologeticsPage';
import { DashboardPage } from './pages/DashboardPage';
import { IllustrationsPage } from './pages/IllustrationsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProphecyScorecardPage } from './pages/ProphecyScorecardPage';
import { ResearchBriefsPage } from './pages/ResearchBriefsPage';
import { SoundboardPage } from './pages/SoundboardPage';
import { SourceLibraryPage } from './pages/SourceLibraryPage';
import { StreamToolkitPage } from './pages/StreamToolkitPage';
import { SyllogismBuilderPage } from './pages/SyllogismBuilderPage';
import { SyllogismsPage } from './pages/SyllogismsPage';

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
                <Route path='/counter-apologetics'
                    element={
                        <CounterApologeticsPage/>}/>
                <Route path='/research-briefs'
                    element={
                        <ResearchBriefsPage/>}/>
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
                <Route path='/syllogisms'
                    element={
                        <SyllogismsPage/>}/>
                <Route path='/syllogism-builder'
                    element={
                        <SyllogismBuilderPage/>}/>
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
