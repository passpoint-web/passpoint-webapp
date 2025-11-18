import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PressReleaseTemplate from "@/components/PressReleaseTemplate";
import Footer from "@/components/Footer";

interface PressReleaseData {
  title: string;
  headerImage: string;
  category: string;
  publishDate: string;
  content: {
    paragraphs: string[];
    links?: Array<{
      text: string;
      url: string;
    }>;
  };
  slug: string;
}

const PressReleaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [pressRelease, setPressRelease] = useState<PressReleaseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // This would typically fetch from your backend API using the slug
    // For now, showing example data structure
    const mockPressReleases: Record<string, PressReleaseData> = {
      "ubuntu-pitch-sponsorship": {
        title: "Passpoint Charts the Future of African Sports Storytelling with Ubuntu Pitch Sponsorship",
        headerImage: "/lovable-uploads/ubuntu-pitch-header.png",
        category: "Sponsorship",
        publishDate: "2025-11-17",
        slug: "ubuntu-pitch-sponsorship",
        content: {
          paragraphs: [
            "Passpoint, Africa's unified payment infrastructure provider, has reiterated its commitment to supporting and showcasing African excellence by serving as the headline sponsor of the inaugural episode of Ubuntu Pitch.",
            "The premiere episode spotlights the illustrious career of former Ivorian international footballer Wilfried Bony and kicks off a long form documentary series that explores the journeys, challenges, and achievements of African sporting talents across the continent.",
            "In the episode, Bony offers a candid, insider perspective on his rise as one of Africa's football heroes. Ubuntu Pitch, a global storytelling platform dedicated to revealing the human story behind sporting greatness, curates the narrative with depth and authenticity. The entire episode can be watched on youtube <a href='https://youtu.be/ev2sTzHMsVo?si=fDKexYsxP3FaFAwi' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>here</a>.",
            "Sharing the strategic vision behind the sponsorship, Chief Executive Officer, Passpoint, Kelechi Uchegbulem said \"We are sponsoring Ubuntu Pitch because African sports stories deserve global stages. When we celebrate the journeys of our athletes, we preserve our history, elevate our identity, and ignite ambition in the next generation.",
            "Passpoint is built on the belief that connection drives progress. With one integration powering secure and borderless payments across Africa and the G20, we help businesses move money but ultimately, we help people move forward. By supporting the first episode of Ubuntu Pitch, we are merging technology with storytelling to create opportunities, inspire possibility, and remind young Africans that their dreams can travel as far as their talent will take them.\"",
            "Echoing this sentiment, Pascal Mbey, founder of Ubuntu Pitch said \"This sponsorship by Passpoint embodies the true spirit of Ubuntu: I am because we are. Together, we are not just sharing stories; we are building bridges. By celebrating African sportsmen and women and connecting them to platforms that unlock opportunity, we are proving that when one of us rises, we all rise.\"",
            "Passpoint's sponsorship of the Ubuntu Pitch premiere underscores a shared mission to advance African excellence by combining technology, storytelling, and global opportunity using sport as a key catalyst. Through this collaboration, Passpoint and Ubuntu Pitch have spotlighted a legendary African athlete, elevating Wilfried Bony's inspiring story of resilience and ambition, and reinforcing their joint vision of One API, One Africa, One Goal."
          ]
        }
      },
      "one-api-one-africa-francophone-corridors": {
        title: "Passpoint Advances Its \"One API, One Africa\" Agenda",
        headerImage: "/lovable-uploads/2c2bbee3-8758-423f-90b4-b2938a403093.png",
        category: "Expansion",
        publishDate: "2025-08-03",
        slug: "one-api-one-africa-francophone-corridors",
        content: {
          paragraphs: [
            "Passpoint, Africa's unified payment infrastructure provider, has activated six new payment corridors across Francophone West Africa, giving businesses unparalleled access to operate in and scale across the region's most dynamic and underserved markets.",
            "With a single API integration, businesses can now collect and disburse payments in Ivory Coast, Senegal, Mali, Togo, Benin, and Burkina Faso, using trusted local mobile money rails, all while ensuring compliance and treasury efficiency.",
            "Commenting on the inclusion of francophone corridors in its infrastructure, CEO of Passpoint, Kelechi Uchegbulem, said \"Every corridor we open is a building block toward a truly unified payment infrastructure for Africa. This activation brings us several steps closer to that reality, empowering our partners to scale faster, enter new markets more confidently, and deliver local relevance with global consistency.\"",
            "\"For years, accessing Francophone Africa's financial ecosystems meant navigating fragmented infrastructure and inconsistent payment options. We are pleased to pioneer this strategic intervention for the continent; it is a key part of our vision to give African businesses a plug-and-play infrastructure to operate reliably across borders.\" He added.",
            "The countries and payment methods activated reflect the daily payment habits of customers in the region. Passpoint has unlocked Ivory Coast: Momo (MTN, Moov, Orange, Wave); Senegal: Momo (Orange, Free, Wave Espresso); Benin: Momo (Moov, MTN, Carte); Burkina Faso: Momo (Orange, Moov, Coris); Togo: Momo (TMoney, Moov) and Mali: Momo (Orange, Moov, Sama).",
            "Passpoint's infrastructure currently supports hundreds of African and global companies building in sectors like e-commerce, remittance, logistics, and financial technology, offering localised access at scale. The newly activated corridors span the heart of Francophone Africa, creating global opportunities for the region's currency, the West African CFA franc (XOF). These corridors also address key challenges businesses face, from fragmented mobile money networks to reconciliation delays and regional compliance and replace them with one simplified, scalable system."
          ]
        }
      },
      "series-b-funding-announcement": {
        title: "Passpoint Announces $50M Series B Funding Round",
        headerImage: "/api/placeholder/1200/600",
        category: "Funding",
        publishDate: "2024-01-15",
        slug: "series-b-funding-announcement",
        content: {
          paragraphs: [
            "LAGOS, Nigeria - January 15, 2024 - Passpoint, Africa's leading payment infrastructure platform, today announced the successful completion of a $50 million Series B funding round. The investment round was led by prominent venture capital firms with a focus on African fintech innovation.",
            "This significant funding milestone will enable Passpoint to accelerate its expansion across the African continent, enhance its payment infrastructure, and develop new innovative solutions for businesses and consumers. The company plans to use the funds to expand into 15 additional African markets over the next 18 months.",
            "\"This investment represents a major validation of our vision to build a unified payment infrastructure for Africa,\" said [CEO Name], Chief Executive Officer of Passpoint. \"We're excited to work with our investors to bring seamless, reliable payment solutions to millions more people across the continent.\"",
            "Since its inception, Passpoint has processed over $2 billion in transactions and serves more than 10,000 businesses across 12 African countries. The platform has demonstrated consistent month-over-month growth, with transaction volumes increasing by 300% year-over-year.",
            "The Series B funding follows Passpoint's successful Series A round of $15 million completed in 2022. The company has been recognized as one of the fastest-growing fintech companies in Africa and has received numerous industry awards for its innovative approach to payment infrastructure."
          ],
          links: [
            {
              text: "Learn more about Passpoint's solutions",
              url: "/solutions"
            },
            {
              text: "View our company manifesto",
              url: "/manifesto"
            }
          ]
        }
      },
      "bank-partnerships-expansion": {
        title: "Passpoint Partners with Major Banks Across 10 African Countries",
        headerImage: "/api/placeholder/1200/600", 
        category: "Partnership",
        publishDate: "2024-01-10",
        slug: "bank-partnerships-expansion",
        content: {
          paragraphs: [
            "CAPE TOWN, South Africa - January 10, 2024 - Passpoint today announced strategic partnerships with leading banks across 10 African countries, significantly expanding its payment infrastructure network and enabling seamless cross-border transactions for millions of users.",
            "The partnerships include collaborations with tier-1 banks in Nigeria, Kenya, Ghana, South Africa, Egypt, Morocco, Tanzania, Uganda, Rwanda, and Senegal. These alliances will allow Passpoint to offer enhanced payment services, including instant bank transfers, mobile money integration, and improved foreign exchange capabilities.",
            "\"These partnerships represent a fundamental shift in how financial institutions approach cross-border payments in Africa,\" said [Partnership Director Name], Director of Strategic Partnerships at Passpoint. \"By working together, we're breaking down barriers that have historically made it difficult for businesses and individuals to transact across African borders.\"",
            "The new partnerships will enable several key capabilities including real-time settlement between partner banks, reduced transaction fees for cross-border payments, enhanced compliance and regulatory reporting, and improved customer experience through unified payment interfaces.",
            "This expansion aligns with Passpoint's mission to create a single, unified payment infrastructure for the African continent. The company expects these partnerships to increase its total addressable market by over 200 million potential users."
          ]
        }
      },
      "mobile-wallet-milestone": {
        title: "New Mobile Wallet Integration Reaches 1 Million Users",
        headerImage: "/api/placeholder/1200/600",
        category: "Product", 
        publishDate: "2024-01-05",
        slug: "mobile-wallet-milestone",
        content: {
          paragraphs: [
            "ACCRA, Ghana - January 5, 2024 - Passpoint's newly launched mobile wallet integration has achieved a significant milestone, reaching 1 million active users within just six months of its launch. This achievement underscores the growing demand for digital payment solutions across Africa.",
            "The mobile wallet solution allows users to store funds securely, make instant payments to merchants, send money to friends and family, and access a range of financial services through a simple, intuitive mobile interface. The platform supports multiple currencies and enables seamless conversion between different African currencies.",
            "\"Reaching 1 million users so quickly validates our approach to mobile payments,\" said [Product Director Name], Head of Product at Passpoint. \"We've focused on creating a solution that's not just technologically advanced, but also accessible and practical for everyday use across diverse African markets.\"",
            "Key features that have driven adoption include offline transaction capabilities for areas with limited internet connectivity, multi-language support for over 20 African languages, integration with existing mobile money platforms, and robust security features including biometric authentication.",
            "Looking ahead, Passpoint plans to expand the mobile wallet's capabilities to include savings accounts, micro-lending services, and investment opportunities, further cementing its position as a comprehensive financial services platform for African consumers."
          ]
        }
      }
    };

    // Simulate API call
    setTimeout(() => {
      if (slug && mockPressReleases[slug]) {
        setPressRelease(mockPressReleases[slug]);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }, 1000);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading press release...</p>
        </div>
      </div>
    );
  }

  if (notFound || !pressRelease) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Press Release Not Found</h1>
          <p className="text-muted-foreground mb-8">The press release you're looking for doesn't exist or has been moved.</p>
          <a href="/press-media" className="text-primary hover:underline">
            Return to Press & Media Resources
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <PressReleaseTemplate {...pressRelease} />
      <Footer />
    </>
  );
};

export default PressReleaseDetail;