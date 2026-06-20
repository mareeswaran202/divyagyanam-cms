import type { Schema, Struct } from '@strapi/strapi';

export interface SharedLanguage extends Struct.ComponentSchema {
  collectionName: 'components_shared_languages';
  info: {
    displayName: 'Language';
    icon: 'globe';
  };
  attributes: {
    Active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    LanguageCode: Schema.Attribute.String;
    LanguageName: Schema.Attribute.String;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_cards';
  info: {
    displayName: 'ServiceCard';
    icon: 'cog';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
    URLLink: Schema.Attribute.String;
    URLText: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'manyToOne';
  };
  attributes: {
    icon: Schema.Attribute.String;
    PlatformName: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.language': SharedLanguage;
      'shared.service-card': SharedServiceCard;
      'shared.social-link': SharedSocialLink;
    }
  }
}
