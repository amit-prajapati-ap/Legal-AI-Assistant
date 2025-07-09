import React, { useState } from 'react';
import { Scale, Sparkles } from 'lucide-react';
import QueryInput from './QueryInput';
import AnswerDisplay from './AnswerDisplay';
import CitationPanel from './CitationPanel';
import { toast } from 'react-toastify';
import Footer from './Footer';
import cases from '../assets/cases.ts'

export interface ApiResponse {
    answer: string;
    citation: {
        text: string;
        pdfLink: string;
        scrollToHighlight: boolean;
        source?: string;
    };
}

const LegalAssistant: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState<ApiResponse | null>(null);

    const simulateApiCall = async (query: string): Promise<ApiResponse> => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        const lowerQuery = query.toLowerCase();

        // Define keyword-based routing map
        const keywordMap: Record<string, string[]> = {
            minor: ['minor', 'license', 'underage'],
            dowryDeath: ['dowry', 'death', 'marriage'],
            bailAnticipatory: ['anticipatory bail', 'arrest', '438'],
            chequeBounce: ['cheque', 'bounce', 'dishonour'],
            consumerRights: ['consumer', 'deficiency', 'service'],
            illegalArrest: ['illegal arrest', 'custody', 'detention'],
            workplaceHarassment: ['harassment', 'posh', 'workplace'],
            marriageVoid: ['void marriage', 'second marriage', 'bigamy'],
            domesticViolence: ['domestic violence', 'protection', 'wife'],
            childCustody: ['custody', 'child', 'divorce'],
            cyberCrime: ['cyber', 'hacking', 'online fraud', "hacked"],
            tenantEviction: ['tenant', 'eviction', 'rent'],
            propertyDispute: ['property', 'land', 'title'],
            policeComplaint: ['FIR', 'complaint', 'police'],
            adoptionLaw: ['adoption', 'child', 'guardian'],
            freedomOfSpeech: ['speech', 'expression', 'article 19'],
            rightToEducation: ['education', 'rte', '21a'],
            abortionRights: ['abortion', 'pregnancy', 'mtp'],
            liveInRelationship: ['live-in', 'relationship', 'cohabitation'],
            tripleTalaq: ['talaq', 'muslim divorce', 'triple talaq']
        };

        // Check query against keyword map
        for (const [key, keywords] of Object.entries(keywordMap)) {
            if (keywords.some(kw => lowerQuery.includes(kw))) {
                return cases[key];
            }
        }

        // Fallback to default
        return cases.default;
    };

    const handleQuerySubmit = async (query: string) => {
        setIsLoading(true);
        setResponse(null);

        try {
            console.log('Processing query:', query);
            const apiResponse = await simulateApiCall(query);
            setResponse(apiResponse);

            toast.success("Legal research completed successfully.");
        } catch (error) {
            console.error('Error processing query:', error);
            toast.error("Failed to process your query. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-[1500px] mx-auto px-4 py-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <Scale className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">LegalAI Assistant</h1>
                            <p className="text-gray-600 text-sm">AI-Powered Legal Research & Analysis</p>
                        </div>
                        <Sparkles className="h-5 w-5 text-blue-500 ml-auto animate-pulse" />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                <QueryInput onSubmit={handleQuerySubmit} isLoading={isLoading} />

                {isLoading && (
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-6 text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Analyzing your legal query...</p>
                        <p className="text-sm text-gray-500 mt-2">Searching through legal databases and case law</p>
                    </div>
                )}

                {response && (
                    <div className="space-y-6">
                        <AnswerDisplay answer={response.answer} isVisible={!!response} />
                        {response.citation.source && <CitationPanel citation={response.citation} isVisible={!!response} />}
                    </div>
                )}

                {!response && !isLoading && (
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
                        <Scale className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Ready to Assist</h3>
                        <p className="text-gray-500">
                            Enter your legal question above to get started with AI-powered legal research and analysis.
                        </p>
                    </div>
                )}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LegalAssistant;